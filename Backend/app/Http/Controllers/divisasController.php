<?php

namespace App\Http\Controllers;

use App\Models\Divisa;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class divisasController extends Controller
{
    public function index()
    {
        try {
            $divisas = Divisa::get();

            return response()->json([
                'operacion' => true,
                'divisas' => $divisas,
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'operacion' => false,
                'mensaje' => 'Error al obtener las divisas',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
