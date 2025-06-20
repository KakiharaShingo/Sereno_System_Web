<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public API routes for 3DMOTOCRAFT
Route::get('/company-info', [\App\Http\Controllers\HomeController::class, 'getCompanyInfo']);
Route::get('/location-info', [\App\Http\Controllers\HomeController::class, 'getLocationInfo']);
Route::get('/youtube-info', [\App\Http\Controllers\HomeController::class, 'getYouTubeInfo']);

// Contact form API
Route::post('/contact', [\App\Http\Controllers\HomeController::class, 'contact']);
Route::post('/contact-test', [\App\Http\Controllers\HomeController::class, 'contactTest']);

// Future e-commerce API routes
Route::prefix('shop')->group(function () {
    Route::get('/products', function () {
        return response()->json(['message' => 'E-commerce functionality coming soon']);
    });
    
    Route::get('/categories', function () {
        return response()->json(['message' => 'E-commerce functionality coming soon']);
    });
});