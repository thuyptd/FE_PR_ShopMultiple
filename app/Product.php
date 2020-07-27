<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'code', 'name', 'thumbnail', 'price', 'detail', 'quantity', 'category_id', 'unit_id', 'brand_id'
    ];

    public function unit() {
        return $this->hasOne('App\Unit');
    }

    public function category() {
        return $this->hasOne('App\Category');
    }

    public function brand() {
        return $this->hasOne('App\Brand');
    }


}
