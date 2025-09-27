<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Documento;

class DocumentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $documentos = [
            [
                'simbolo' => 'PP'
            ],
            [
                'simbolo' => 'CI'
            ],
        ];

        Documento::insert($documentos);

        $this->command->info('Documentos insertados correctamente');
    }
}
