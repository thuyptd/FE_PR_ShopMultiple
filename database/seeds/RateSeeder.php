<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $rates = [
            ['name' => 'Basic', 'amount' => '50'],
            ['name' => 'Medium', 'amount' => '100'],
            ['name' => 'Silver', 'amount' => '150'],
            ['name' => 'Gold', 'amount' => '300'],

        ];
        DB::table('rates')->insert($rates);
    }
}
