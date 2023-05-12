<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // TODO : Obtener el listado de usuariosm paginados
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
    public function create()
    {
        return Inertia::render('Usuarios/UserCreate');
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
            'seller_reference' => [Rule::requiredIf($request->input('user_type') === 'seller'), 'nullable','unique:users'],
            'user_type' => 'required',
            'password' => 'required'
        ]);
        try {
            $user = new User();
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->phone = $request->input('phone');
            $user->address = $request->input('address');
            $user->insurance_contact_name = $request->input('insurance_contact_name');
            $user->seller_reference = $request->input('seller_reference');
            $user->user_type = $request->input('user_type');
            $user->password = Hash::make($request->input('password'));
            $user->save();
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
}
