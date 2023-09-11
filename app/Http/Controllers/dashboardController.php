<?php

namespace App\Http\Controllers;

use App\Models\dataMobil;
use Illuminate\Http\Request;
use Inertia\Inertia;

class dashboardController extends Controller
{
    public function index()
    {
        $data = dataMobil::all();
        return Inertia::render('Dashboard', [

            'data' => $data,

        ]);
    }
}
