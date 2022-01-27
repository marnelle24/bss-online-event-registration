<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DepartmentFactory extends Factory
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
            'code'          => $this->faker->unique()->randomLetter(5),
            'slug'          => Str::slug($name),
            'details'       => $this->faker->sentence(1),
            'icon'        =>Storage::disk('public')->put('department_icon', $imageFile)

        ];
    }
}
