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
        $categories = Category::with('events')
            ->get();

        return $categories;

    }

    //get specific category
    public function show($id) {

        $category = Category::where('id', $id)
            ->with('events')
            ->first();

        return $category;

    }

}
