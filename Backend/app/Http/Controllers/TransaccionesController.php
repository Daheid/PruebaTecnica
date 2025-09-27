<?php

namespace App\Http\Controllers;

use App\Models\Transaccion;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;


class TransaccionesController extends Controller
{
    /**
     * Funcion para obtener todas las transacciones.
     */
    public function index() {}

    /**
     * Funcion para crear nuevas transacciones.
     */
    public function crear(Request $request)
    {
        $datos = $request->all();
        try {
            $datosValidados = request()->validate([
                'divisa_id' => 'required|exists:divisas,id',
                'monto' => 'required|numeric|min:0.01',
                'descripcion' => 'required|string|max:255',
                'nombre' => 'required|string|max:100',
                'apellido' => 'required|string|max:100',
                'documento_id' => 'required|exists:documentos,id',
                'nro_documento' => 'required|string|max:16',
                'nro_tarjeta' => 'required|string|max:20',
                'ano_vencimiento' => 'required|',
                'mes_vencimiento' => 'required|',
            ]);

            $transaccion = Transaccion::create($datosValidados);
            return response()->json([
                'Operacion' => 'exitosa',
                'transaccion' => $transaccion
            ], Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
