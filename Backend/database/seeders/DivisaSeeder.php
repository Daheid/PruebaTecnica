<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Divisa;

class DivisaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $divisas = [
            [
                'simbolo' => 'USD'
            ],
            [
                'simbolo' => 'COP'
            ],
        ];

        Divisa::insert($divisas);

        $this->command->info('Divisas insertadas correctamente');
    }
}
