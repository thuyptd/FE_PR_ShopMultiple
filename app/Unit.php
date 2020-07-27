<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    //
    protected $fillable = [
        'name'
    ];

    public function getUnitNameById($id) {
        $name = Unit::where('id', $id)->orderBy('create_at', 'desc')->get();
        return $name;
    }
}
