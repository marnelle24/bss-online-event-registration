<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Event;
use App\Models\Category;
use App\Models\User;
use App\Models\Speaker;
use App\Models\Department;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->count(2)->create();
        Event::factory()->count(25)->create();
        Category::factory()->count(10)->create();
        Speaker::factory()->count(8)->create();
        Department::factory()->count(5)->create();


        $categories = Category::all();
        $speakers   = Speaker::all();
        $department = Department::all();


        Event::all()->each(function ($event) use ($categories) {

            $event->categories()->attach(
                $categories->random(2)->pluck('id')->toArray()
            );

        });

        Event::all()->each(function ($event) use ($speakers) {

            $event->speakers()->attach(
                $speakers->random(2)->pluck('id')->toArray()
            );

        });

        Event::all()->each(function ($event) use ($department) {

            $event->departments()->attach(
                $department->random(2)->pluck('id')->toArray()
            );

        });

    }
}
