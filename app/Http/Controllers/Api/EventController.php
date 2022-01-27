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
        $events = Event::with('categories:id,name')->get();
        return $events;

    }

    //return all events with categories
    public function show($id) 
    {
        $event = Event::where('id', $id)->get();
        return $event;

    }

}
