<?php

use App\Http\Controllers\ApiController;
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

Route::get('/posts', [ApiController::class, 'index'])->name('api.view');

Route::post('/posts', [ApiController::class, 'store'])->name('api.create');

Route::patch('/posts/{id}', [ApiController::class, 'update'])->name('api.update');

Route::delete('/posts/{id}', [ApiController::class, 'destroy'])->name('api.destroy');
