<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    //
    protected $fillable = [
        'logo', 'code', 'name'
    ];

    public function getBrandNameById($id) {
        $name = Brand::where('id', $id)->orderBy('create_at', 'desc')->get();
        return $name;
    }
}
