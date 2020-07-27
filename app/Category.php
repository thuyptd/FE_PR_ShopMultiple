<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $fillable = [
        'name', 'code'
    ];

    public function getCategoryNameById($id) {
        $name = Category::where('id', $id)->orderBy('create_at', 'desc')->get();
        return $name;
    }
}
