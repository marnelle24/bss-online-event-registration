<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserFactory extends Factory
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
            'nric'              => $this->faker->randomNumber(4),
            'title'             => $this->faker->title(),
            'christianName'     => $this->faker->firstName(),
            'givenName'         => $this->faker->firstName(),
            'familyName'        => $this->faker->lastName(),
            'contactNo'         => $this->faker->phoneNumber(),
            'address1'          => $this->faker->streetAddress(),
            'address2'          => $this->faker->streetName(),
            'city'              => $this->faker->city(),
            'postcode'          => $this->faker->postcode(),
            'email'             => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password'          => '$2y$10$lNzbPNVUfadYhC15vo0WLeV4Z0AreP0HqBGcQ6zoWmWXU6GewVqC.', // 1231
            'icon'              =>Storage::disk('public')->put('user_avatar', $imageFile),
            'remember_token'    => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
