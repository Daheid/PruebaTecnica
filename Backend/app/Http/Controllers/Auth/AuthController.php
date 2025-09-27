<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registro(Request $request)
    {
        try {
            $datosValidados = request()->validate([
                'nombre' => 'required|min:3|max:16|unique:users,nombre',
                'password' => 'required|min:8|max:16',
            ]);

            $usuario = User::create($datosValidados);
            return response()->json([
                'operacion' => true,
                'usuario' => $usuario
            ], Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json([
                'operacion' => false,
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function login(Request $request)
    {
        try {

            $datosValidados = request()->validate([
                'nombre' => 'required|string',
                'password' => 'required|string',
            ]);

            $usuario = User::where('nombre', $datosValidados['nombre'])->first();

            //validar usuario y password en la misma condicional
            if (!$usuario || !Hash::check($datosValidados['password'], $usuario->password)) {
                throw ValidationException::withMessages([
                    'nombre' => ['Las credenciales ingresadas son incorrectas.'],
                ]);
            }

            // token de acceso Sanctum
            $token = $usuario->createToken('Token-administrador')->plainTextToken;

            return response()->json([
                'operacion' => true,
                'mensaje' => 'Login exitoso',
                'usuario' => $usuario->nombre,
                'token' => $token,
                'cifrado' => 'Bearer'
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'operacion' => false,
                'mensaje' => 'Error de validación',
                'error' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Exception $e) {
            return response()->json([
                'operacion' => false,
                'mensaje' => 'Error en el proceso de login',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
