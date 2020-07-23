<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->sentence(1),
        'price' => $faker->numberBetween(0, 9999000),
        'detail' => $faker->sentence(5),
        'quality' => $faker->numberBetween(0, 1000),
    ];
});
