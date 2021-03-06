<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Product::class, function (Faker $faker) {
    return [
        //
        'code' => strtoupper(Str::random(8)),
        'name' => $faker->sentence(1),
        'price' => $faker->numberBetween(0, 9999000),
        'detail' => $faker->sentence(5),
        'quantity' => $faker->numberBetween(0, 1000),
    ];
});
