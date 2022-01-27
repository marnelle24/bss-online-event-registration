<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    
    //return all categories
    public function index() 
    {
        $events = Category::all();
        return $events;

    }

}
