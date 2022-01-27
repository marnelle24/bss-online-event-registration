<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Event;
use App\Models\Category;
use App\Models\User;

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

        $categories = Category::all();

        Event::all()->each(function ($event) use ($categories) {

            $event->categories()->attach(
                $categories->random(2)->pluck('id')->toArray()
            );

        });

    }
}
