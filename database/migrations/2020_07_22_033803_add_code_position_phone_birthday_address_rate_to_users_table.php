<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCodePositionPhoneBirthdayAddressRateToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->char('code')->nullable()->after('name');
            $table->string('position')->nullable()->after('remember_token');
            $table->char('phone')->nullable()->after('remember_token');
            $table->date('birthday')->nullable()->after('remember_token');
            $table->string('address')->nullable()->after('remember_token');
            $table->integer('votes')->default(0)->after('remember_token');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
