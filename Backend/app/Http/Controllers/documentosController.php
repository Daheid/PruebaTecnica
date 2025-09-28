<?php

namespace App\Http\Controllers;

use App\Models\Documento;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class documentosController extends Controller
{
    public function index()
    {
        try {
            $documentos = Documento::get();

            return response()->json([
                'operacion' => true,
                'documentos' => $documentos,
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'operacion' => false,
                'mensaje' => 'Error al obtener los documentos',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
