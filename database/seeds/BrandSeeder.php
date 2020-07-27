<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $brands = [
            ['code' => strtoupper(Str::random(6)), 'name' => 'Adidas', 'description' => Str::random()],
            ['code' => strtoupper(Str::random(6)), 'name' => 'Gucci', 'description' => Str::random()],
            ['code' => strtoupper(Str::random(6)), 'name' => 'Puma', 'description' => Str::random()],
        ];
        DB::table('brands')->insert($brands);
    }
}
