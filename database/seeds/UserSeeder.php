<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $users = [
            ['code' => 'THUYPD', 'name' => 'admin', 'phone' => '0989310732', 'email' => 'thuyptd@vn.ids.jp', 'password' => Hash::make('password')]
        ];
        DB::table('users')->insert($users);

        factory(\App\User::class, 20)->create();
    }
}
