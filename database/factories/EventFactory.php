<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        $programId  = $this->faker->randomNumber(5);
        $title      = $this->faker->sentence($this->faker->numberBetween(2, 15));
        $slug       = Str::slug($title);
        $eventType  = $this->faker->randomElement(["online", "non-online"]);

        $imageFile  = new File($this->faker->image());
        $startDate  = $this->faker->date('Y-m-d');
        $endDate    = $this->faker->dateTimeBetween($startDate)->format('Y-m-d');
        $startTime  = $this->faker->time('H:i');
        $endTime    = $this->faker->time('H:i');

        return [
            
            'programID'                 => $programId,
            'programCode'               => 'BSS_' . $programId,
            'title'                     => $title,
            'slug'                      => $slug,
            'eventType'                 => $eventType,
            'venue'                     => $eventType === 'online' ? NULL : $this->faker->address(),
            'onlineEventDetails'        => $eventType === 'online' ? "{ 'platform':'zoom', 'platform_id':'1234455', 'password': '51413' }" : NULL,
            'description'               => $this->faker->sentence(50),
            'posterPath'                => Storage::disk('public')->put('event_images/poster', $imageFile),
            'startDate'                 => $startDate,
            'endDate'                   => $endDate,
            'startTime'                 => $startTime,
            'endTime'                   => $endTime,
            'validUntil'                => $endDate,
            'limitParticipants'         => $this->faker->randomNumber(3),
            'emailIncharge'             => $this->faker->email(),
            'isActive'                  => 1,
            'isPublic'                  => 1,
            'isActive'                  => 1,
            'isPublished'               => 1,
            'isArchived'                => 1,

        ];
    }
}
