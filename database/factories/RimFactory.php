<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Rim;
use Faker\Generator as Faker;

$factory->define(Rim::class, function (Faker $faker) {
    $extension = '\.jpg';
    return [
        'name' => $faker->name,
        'size' => $faker->numberBetween(14,19),
        'color' => $faker->colorName,
        'price' => $faker->numberBetween(6000,20000),
        'image' => $faker->name.$extension
    ];
});
