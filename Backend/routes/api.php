<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransaccionesController;

//Rutas para transacciones
Route::post('/transacciones', [TransaccionesController::class, 'index']);
