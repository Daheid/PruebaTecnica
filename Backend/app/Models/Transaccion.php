<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaccion extends Model
{
    protected $table = 'transacciones';

    protected $fillable = [
        'divisa_id',
        'monto',
        'descripcion',
        'documento_id',
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
