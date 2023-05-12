<?php

use App\Http\Controllers\CustomersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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
                'store' => 'users.store'
            ]
        ]);
    });

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/customers', [CustomersController::class, 'index'])->name('customers.index');
    Route::get('/agencies', [UsersController::class, 'index'])->name('agencies.index');
    Route::get('/agencies/create', [UsersController::class, 'create'])->name('agencies.create');
    Route::get('/sellers', [UsersController::class, 'index'])->name('sellers.index');
    Route::get('/sellers/create', [UsersController::class, 'create'])->name('sellers.create');
});

Route::post('/customers', [CustomersController::class, 'store'])->name('customers.store');

require __DIR__.'/auth.php';
