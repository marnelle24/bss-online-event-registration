<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SpeakerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $imageFile  = new File($this->faker->image());
        $name = $this->faker->name();

        return [
            
            'name'          => $name,
            'slug'          => Str::slug($name),
            'description'   => $this->faker->sentence(40),
            'avatar'        =>Storage::disk('public')->put('speaker_avatar', $imageFile)

        ];
    }
}
