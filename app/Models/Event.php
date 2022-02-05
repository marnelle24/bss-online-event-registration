<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_event');
    }

    public function speakers()
    {
        return $this->belongsToMany(Speaker::class, 'event_speaker');
    }

    public function departments()
    {
        return $this->belongsToMany(Department::class, 'department_event');
    }

    public function orders() 
    {
        return $this->belongsToMany(Order::class);
    }
}
