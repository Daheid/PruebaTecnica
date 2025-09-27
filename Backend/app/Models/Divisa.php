<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Divisa extends Model
{
    protected $table = 'divisas';

    protected $fillable = [
        'simbolo',
    ];

    public $timestamps = false;

    public function transacciones()
    {
        return $this->hasMany(Transaccion::class);
    }
}
