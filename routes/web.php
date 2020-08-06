<?php

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

Route::get('/home','Auth\LoginController@login')->name('login');

Route::get('profile','ProfileController@index')->name('profile');


Auth::routes();
Route::get('/', 'HomeController@index')->name('home');
Route::resource('users', 'UserController');
/*Route::get('users', 'UserController@index')->name('users');
Route::get('user/{user}', 'UserController@show')->name('user.show');
Route::get('user/create', 'UserController@create')->name('user.create');
Route::get('user/{user}', 'UserController@edit')->name('user.edit');
Route::get('user/{user}', 'UserController@destroy')->name('user.destroy');*/
Route::resource('products','ProductController');
Route::resource('brands','BrandController');

