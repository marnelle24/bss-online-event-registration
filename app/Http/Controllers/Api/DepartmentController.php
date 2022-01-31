<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    //return all departments
    public function index() 
    {
        $departments = Department::with('events')
            ->get();

        return $departments;

    }

    //get specific department
    public function show($id) {

        $department = Department::where('id', $id)
            ->with('events')
            ->first();

        return $department->events;

    }
}
