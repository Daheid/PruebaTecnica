<?php

namespace Database\Seeders;

use App\Models\Transaccion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransaccionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $transaccion = [
            [
                'divisa_id' => '1',
                'monto' => '100.50',
                'descripcion' => 'Pago de servicios',
                'nombre' => 'Juan',
                'apellido' => 'Perez',
                'documento_id' => '1',
                'nro_documento' => '12345678',
                'nro_tarjeta' => '4111111111111111',
                'ano_vencimiento' => '2025',
                'mes_vencimiento' => '12',

            ],
            [
                'divisa_id' => '1',
                'monto' => '100.50',
                'descripcion' => 'Pago de servicios',
                'nombre' => 'Juan',
                'apellido' => 'Perez',
                'documento_id' => '1',
                'nro_documento' => '12345678',
                'nro_tarjeta' => '4111111111111111',
                'ano_vencimiento' => '2025',
                'mes_vencimiento' => '12',

            ],
            [
                'divisa_id' => '1',
                'monto' => '100.50',
                'descripcion' => 'Pago de servicios',
                'nombre' => 'Juan',
                'apellido' => 'Perez',
                'documento_id' => '1',
                'nro_documento' => '12345678',
                'nro_tarjeta' => '4111111111111111',
                'ano_vencimiento' => '2025',
                'mes_vencimiento' => '12',

            ],
            [
                'divisa_id' => '1',
                'monto' => '100.50',
                'descripcion' => 'Pago de servicios',
                'nombre' => 'Juan',
                'apellido' => 'Perez',
                'documento_id' => '1',
                'nro_documento' => '12345678',
                'nro_tarjeta' => '4111111111111111',
                'ano_vencimiento' => '2025',
                'mes_vencimiento' => '12',

            ],
            [
                'divisa_id' => '2',
                'monto' => '200.00',
                'descripcion' => 'Compra en tienda',
                'nombre' => 'Maria',
                'apellido' => 'Gomez',
                'documento_id' => '2',
                'nro_documento' => '87654321',
                'nro_tarjeta' => '4222222222222222',
                'ano_vencimiento' => '2026',
                'mes_vencimiento' => '11',

            ],
            [
                'divisa_id' => '1',
                'monto' => '50.75',
                'descripcion' => 'Pago de suscripcion',
                'nombre' => 'Carlos',
                'apellido' => 'Lopez',
                'documento_id' => '1',
                'nro_documento' => '11223344',
                'nro_tarjeta' => '4333333333333333',
                'ano_vencimiento' => '2024',
                'mes_vencimiento' => '10',

            ],
            [
                'divisa_id' => '2',
                'monto' => '300.20',
                'descripcion' => 'Reserva de hotel',
                'nombre' => 'Ana',
                'apellido' => 'Martinez',
                'documento_id' => '2',
                'nro_documento' => '55667788',
                'nro_tarjeta' => '4444444444444444',
                'ano_vencimiento' => '2025',
                'mes_vencimiento' => '09',
            ],
        ];

        Transaccion::insert($transaccion);

        $this->command->info('transacciones insertadas correctamente');
    }
}
