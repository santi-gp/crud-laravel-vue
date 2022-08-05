<?php

use App\Http\Controllers\Api\MovieController;
use Illuminate\Support\Facades\Route;

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

/*Route::get('/', function () {
    return view('welcome');
});*/

/*Route::get('showMovies', [MovieController::class, 'index'])
    ->name('showMovies');
Route::post('saveMovie', [MovieController::class, 'show'])
    ->name('saveMovie');*/

    Route::get('{any}', function () {
        return view('app');
    })->where('any', '.*');    