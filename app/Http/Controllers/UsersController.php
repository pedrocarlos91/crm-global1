<?php

namespace App\Http\Controllers;

use App\Mail\NewSellerRegistered;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $per_page = $request->input('per_page') ?? 5;
        $search = $request->input('search') ?? '';

        $type_user = $request->getRequestUri();
        $findEndOfURL = (strpos($type_user, '?') -1 > 0) ? strpos($type_user, '?') -1 : strlen($type_user);

        $type_user = substr($type_user, 1, $findEndOfURL);
        $users = User::orderBy('name', 'ASC');

        switch ($type_user) {
            case 'sellers': $users->where('user_type', 'seller');
                            $component = 'Usuarios/SellersIndex';
                            break;
            case 'agencies': $users->where('user_type', 'insurance_carrier');
                            $component = 'Usuarios/AgenciesIndex';
                            break;
            case 'user': $users->where('user_type', 'admin');
                            $component = 'Usuarios/Index';
                            break;
        }

        if (strlen($search)) {
            $users->where(function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%');
                $q->orWhere('email', 'like', '%' . $search . '%');
                $q->orWhere('phone', 'like', '%' . $search . '%');
                $q->orWhere('insurance_contact_name', 'like', '%' . $search . '%');
                $q->orWhere('seller_reference', 'like', '%' . $search . '%');
            });
        }
       $users = $users->paginate($per_page);

        return Inertia::render($component, ['data' => $users, 'search' => $search]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $type_user = $request->getRequestUri();
        $findEndOfURL = (strpos($type_user, '?') -1 > 0) ? strpos($type_user, '?') -1 : strlen($type_user);
        $type_user = substr($type_user, 1, $findEndOfURL);

        if ($type_user === 'sellers/create') return Inertia::render('Usuarios/SellerCreate');
        return Inertia::render('Usuarios/UserCreate', ['type_user' => $type_user]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required | unique:users',
            'phone' => 'required',
            'insurance_contact_name' => [Rule::requiredIf($request->input('user_type') === 'insurance_carrier')],
            'user_type' => 'required',
            'password' => 'required'
        ]);
        $data = $request->all();

        if ($data['user_type'] === 'seller') {
            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
            do{
                $seller_reference = substr(str_shuffle($permitted_chars), 0, 10);
                $seller = User::where('seller_reference', $seller_reference)->first();
            }while(isset($seller));
        } else {
            $seller_reference = null;
        }

        try {
            $user = new User();
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->phone = $data['phone'];
            $user->address = $data['address'];
            $user->insurance_contact_name = $data['insurance_contact_name'];
            $user->seller_reference = $seller_reference;
            $user->user_type = $data['user_type'];
            $user->password = Hash::make($data['password']);
            $user->save();
            if ($user->user_type === 'seller') {
                $send = User::where('user_type', 'admin')->select('email', 'name')->get()->toArray();
                Mail::to($send)->send(new NewSellerRegistered($user, 'admin'));
                Mail::to($user->email)->send(new NewSellerRegistered($user, 'seller'));
                return redirect('/login');
            }
        } catch (\Exception $e) {
//            return response()->withErrors(['message_error_user'=> 'No se creó el usuario: '. $e->getMessage()]);
            return 'No se pudo crear el usuario. ' . $e->getMessage();
        }


        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        return Inertia::render('Usuarios/EditUser', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $data = $request->all();
        $user->update($data);
        return redirect()->back()->with(['message', 'información actualizada']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->back();
    }
    public function changeActivate(Request $request)
    {
        $user = User::find($request->input('user_id'));
        $user->is_active = !$user->is_active;
        $user->save();
        return redirect()->back();
    }
}
