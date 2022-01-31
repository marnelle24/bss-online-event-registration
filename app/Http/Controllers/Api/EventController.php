<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{

    //return all events with categories
    public function index() 
    {
        $events = Event::with('categories:id,slug,name')
            ->get();
        return $events;

    }

    //return specific event with categories
    public function show($id) 
    {
        $event = Event::where('id', $id)
            ->with('categories:id,slug,name')
            ->get();
        return $event;

    }

}
