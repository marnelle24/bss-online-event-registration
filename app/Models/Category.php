<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    use HasFactory;

    protected $guarded = [];

    public function events()
    {
        return $this->belongsToMany(Events::class, 'category_event');
    }

}