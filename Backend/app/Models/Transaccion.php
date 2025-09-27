<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaccion extends Model
{
    protected $table = 'transaccions';

    protected $fillable = [
        'divisa_id',
        'monto',
        'descripcion',
        'nombre',
        'apellido',
        'documento_id',
        'nro_documento',
        'nro_tarjeta',
        'ano_vencimiento',
        'mes_vencimiento',
    ];

    public $timestamps = true;

    public function divisa()
    {
        return $this->belongsTo(Divisa::class);
    }

    public function documento()
    {
        return $this->belongsTo(Documento::class);
    }
}
