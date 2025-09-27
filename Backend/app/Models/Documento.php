<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    protected $table = 'documentos';

    protected $fillable = [
        'simbolo',
    ];

    public $timestamps = false;

    public function transacciones()
    {
        return $this->hasMany(Transaccion::class);
    }
}
