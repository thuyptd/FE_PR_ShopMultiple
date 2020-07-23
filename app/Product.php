<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'code','name', 'price', 'detail', 'quantity', 'category_id', 'unit_id'
    ];
}
