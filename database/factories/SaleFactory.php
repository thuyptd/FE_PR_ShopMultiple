<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sale;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    return [
        //
        'user_id' => $faker->numberBetween(1, 20),
        'product_id' => $faker->numberBetween(1, 100),
        'date' => $faker->dateTime,
    ];
});
