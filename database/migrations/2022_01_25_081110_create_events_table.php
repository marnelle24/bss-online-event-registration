<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('programID')->unique();
            $table->string('programCode')->unique();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('eventType');                        // 1. online event 2. non-online event
            $table->string('venue')->nullable();                // NULL is eventType is set to online event
            $table->text('onlineEventDetails')->nullable();     // object array -> details of  the online event
            $table->text('description')->nullable();
            $table->string('posterPath')->nullable();
            $table->date('startDate');
            $table->date('endDate');
            $table->time('startTime');
            $table->time('endTime');
            $table->date('validUntil');
            $table->integer('price')->default(0);
            $table->integer('limitParticipants')->default(0);   // set to 0 for unlimited seats
            $table->string('emailIncharge')->nullable();
            $table->boolean('isActive')->default(true);
            $table->boolean('isPublic')->default(true);
            $table->boolean('isPublished')->default(true);
            $table->boolean('isfeatured')->default(false);
            $table->boolean('isArchived')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
