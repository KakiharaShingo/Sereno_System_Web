<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Language switching route
Route::get('/lang/{locale}', [LanguageController::class, 'switch'])->name('language.switch');

// Main single page application
Route::get('/', [HomeController::class, 'index'])->name('home');

// Contact form submission
Route::post('/contact', [HomeController::class, 'contact'])->name('contact.submit');

// Hidden EC routes (for future use - not visible in navigation)
Route::prefix('shop')->group(function () {
    Route::get('/', function () {
        return view('shop.index');
    })->name('shop.index');
    
    Route::get('/products', function () {
        return view('shop.products');
    })->name('shop.products');
    
    Route::get('/cart', function () {
        return view('shop.cart');
    })->name('shop.cart');
    
    Route::get('/checkout', function () {
        return view('shop.checkout');
    })->name('shop.checkout');
});

// API routes for AJAX requests
Route::prefix('api')->group(function () {
    Route::get('/company-info', [HomeController::class, 'getCompanyInfo'])->name('api.company.info');
    Route::get('/youtube-info', [HomeController::class, 'getYouTubeInfo'])->name('api.youtube.info');
});