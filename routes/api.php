<?php

use App\Http\Controllers\MessageController;
use App\Models\Post;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/messages', [MessageController::class, 'index'])->name('messages.view');

Route::post('/messages', [MessageController::class, 'store'])->name('messages.create');

Route::patch('/messages/{id}', [MessageController::class, 'update'])->name('messages.update');

Route::delete('/messages/{id}', [MessageController::class, 'destroy'])->name('messages.destroy');
