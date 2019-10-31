<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rim extends Model
{
    protected $fillable = [
        'name','size','color','price','image'
    ];
}
