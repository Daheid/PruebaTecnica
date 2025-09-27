<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaccions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('divisa_id')->constrained('divisas')->onDelete('cascade');
            $table->decimal('monto', 15, 2);
            $table->string('descripcion');
            $table->string('nombre');
            $table->string('apellido');
            $table->foreignId('documento_id')->constrained('documentos')->onDelete('cascade');
            $table->string('nro_tarjeta');
            $table->date('ano_vencimiento');
            $table->string('mes_vencimiento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaccions');
    }
};
