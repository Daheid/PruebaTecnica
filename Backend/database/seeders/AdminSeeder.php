<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = [
            [
                'nombre' => 'admin',
                'password' => '12345678'
            ],

        ];

        User::insert($usuario);

        $this->command->info('usuario insertado correctamente');
    }
}
