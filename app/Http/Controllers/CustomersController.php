<?php

namespace App\Http\Controllers;

use App\Mail\CustomerAssigned;
use App\Mail\CustomerChangeStatus;
use App\Mail\CustomerRegistered;
use App\Mail\CustomerRegisteredSeller;
use App\Mail\CustomerSold;
use App\Mail\ThanksRegistered;
use App\Models\Customer;
use App\Models\CustomerMovement;
use App\Models\CustomerStatus;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $per_page = $request->input('per_page') ?? 5;
        $search = $request->input('search') ?? '';
        $customers = Customer::with('agency', 'seller', 'status')->orderBy('created_at', 'desc');
        $user_auth = auth()->user();
        switch ($user_auth->user_type) {
            case 'seller':
                $customers->where('seller_id', $user_auth->id);
                break;
            case 'insurance_carrier':
                $customers->where('agency_id', $user_auth->id);
                break;
        }

        if (strlen($search)) {
            $customers->where(function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%');
                $q->where('lastname', 'like', '%' . $search . '%');
                $q->orWhere('email', 'like', '%' . $search . '%');
                $q->orWhere('businessEmail', 'like', '%' . $search . '%');
                $q->orWhere('phone', 'like', '%' . $search . '%');
                $q->orWhere('businessPhone', 'like', '%' . $search . '%');
                $q->orWhere(function ($query) use ($search) {
                    $query->whereHas('agency', function ($agency) use ($search) {
                        $agency->where('name', 'like', '%' . $search . '%');
                    }) ;
                });
                $q->orWhere(function ($qu) use ($search) {
                    $qu->whereHas('seller', function ($seller) use ($search) {
                        $seller->where('name', 'like', '%' . $search . '%');
                    }) ;
                });
            });
        }
        $customers = $customers->paginate($per_page);
        return Inertia::render('Customers', ['data' => $customers, 'search' => $search]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $customer = new Customer();
        $customer->fill($data);
        try {
            DB::beginTransaction();
            $customer->type_of_services = json_encode($customer->type_of_services);
            $customer->customer_status_id = 1;
            $customer->save();
            $customer_movement = CustomerMovement::create([
                'customer_id' => $customer->id,
                'customer_status_id' => 1
            ]);
            $customer = $customer->load('seller');
            $admins = User::where('user_type', 'admin')->select('email', 'name')->get()->toArray();
            Mail::to($admins)->send(new CustomerRegistered($customer));
            Mail::to($customer->email ?? $customer->businessEmail)->send(new ThanksRegistered());
            Mail::to($customer->seller->email)->send(new CustomerRegisteredSeller($customer));
            DB::commit();
            return Inertia::render('ThanksRegistered');
        } catch(\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors(['error_customer_create' => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $customer = Customer::find($id)->load('seller', 'agency', 'status', 'history.status');
        $statuses = CustomerStatus::all();
        $agencies = User::where('user_type', 'insurance_carrier')->get();

        return [
            'customer' => $customer,
            'statuses' => $statuses,
            'agencies' => $agencies
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function assignAgency(Request $request) {
        $agency = $request->input('agency');
        try {
            DB::beginTransaction();
            $customer = Customer::find($request->input('customer'));
            $customer->agency_id = $agency;
            $customer->customer_status_id = 2;
            $customer->save();
            CustomerMovement::create([
                'customer_id' => $customer->id,
                'customer_status_id' => $customer->customer_status_id,
            ]);
            // Notificación a administradores y vendedor
            $send = User::where('user_type', 'admin')->select('email', 'name')->get()->toArray();
            $send[] = User::where('id', $customer->seller_id)->select('email', 'name')->first()->toArray();
            Mail::to($send)->send(new CustomerAssigned($customer->load('agency')));

            $send_agency = User::where('id', $agency)->select('name', 'email')->first();
            Mail::to($send_agency)->send(new CustomerAssigned($customer->load('agency'), true));
            DB::commit();
            return redirect()->back();
        } catch (\Exception $e) {
//            return response()->withErrors(['message_error_user'=> 'No se creó el usuario: '. $e->getMessage()]);
            return 'No se pudo asignar al cliente. ' . $e->getMessage();
        }
    }

    public function changeStatus(Request $request) {
        DB::beginTransaction();
        $customer = Customer::find($request->input('customer'));

        $difference_updated = Carbon::now()->diffInSeconds($customer->updated_at);

        if($difference_updated < 20) {
            return back()->withErrors(['message' => 'El cliente no puede actualizarse porque está siendo editado por alguien más']);
        }

        $customer->customer_status_id = $request->input('status');
        $send = User::where('user_type', 'admin')->select('email', 'name')->get()->toArray();
        $send[] = User::where('id', $customer->agency_id)->select('email', 'name')->first()->toArray();
        $send[] = User::where('id', $customer->seller_id)->select('email', 'name')->first()->toArray();
        Mail::to($send)->send(new CustomerChangeStatus($customer->load('status')));

        // Si el nuevo estatus e vendido. Notificar al cliente
        if($request->input('status') == 6) {
            Mail::to($customer)->send(new CustomerSold($customer));
        }

        $customer->save();
        CustomerMovement::create([
            'customer_id' => $customer->id,
            'customer_status_id' => $request->input('status'),
            'comments' => $request->input('comments') ?? ''
        ]);
        DB::commit();
        return redirect()->back();
    }
}
