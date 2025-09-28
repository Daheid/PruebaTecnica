<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\divisasController;
use App\Http\Controllers\documentosController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransaccionesController;

//Rutas para transacciones
Route::post('/transacciones', [TransaccionesController::class, 'crear']);
Route::get('/transacciones', [TransaccionesController::class, 'index']);

//rutas para autenticacion
Route::post('/usuarios', [AuthController::class, 'registro']);
Route::post('/auth/usuarios', [AuthController::class, 'login']);


//obtener miselanios
Route::get('/divisas', [divisasController::class, 'index']);
Route::get('/documentos', [documentosController::class, 'index']);
