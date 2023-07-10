<?php

use App\Http\Controllers\CustomersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function (\Illuminate\Http\Request $request) {
    $user = User::where('seller_reference', $request->input('reference'))
                ->where('user_type', 'seller')
                ->where('is_active', true)
                ->first();
    if (!isset($user)) return '<h3 style="margin-top: 25px; text-align: center;">Reference not found.</h3>';
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'seller' => $user
    ]);
});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('admin')->group(function () {
        Route::resource('/user', UsersController::class, [
            'names' => [
                'index' => 'users.index',
                'create' => 'users.create',
                'edit' => 'users.edit',
                'update' => 'users.update',
                'store' => 'users.store',
                'destroy' => 'users.destroy'
            ]
        ]);
        Route::post('/user/activation', [UsersController::class, 'changeActivate'])->name('user.activation');
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/agencies', [UsersController::class, 'index'])->name('agencies.index');
        Route::get('/agencies/create', [UsersController::class, 'create'])->name('agencies.create');
        Route::get('/sellers', [UsersController::class, 'index'])->name('sellers.index');
    });

    Route::get('/customers', [CustomersController::class, 'index'])->name('customers.index');
    Route::get('/customers/{id}', [CustomersController::class, 'show'])->name('customers.show');
    Route::post('/customers/assign', [CustomersController::class, 'assignAgency'])->name('customer.assign');
    Route::post('/customers/changeStatus', [CustomersController::class, 'changeStatus'])->name('customer.change-status');
});

Route::post('/customers', [CustomersController::class, 'store'])->name('customers.store');
Route::get('/sellers/create', [UsersController::class, 'create'])->name('sellers.create');
Route::post('/sellers', [UsersController::class, 'store'])->name('sellers.store');
//Route::view('/customer-registered', 'emails.thanks_registered')->name('customer_registered');


require __DIR__.'/auth.php';
