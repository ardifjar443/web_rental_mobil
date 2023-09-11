<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\dataMobil;
use Illuminate\Http\Request;

class DataMobilController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $data = dataMobil::all();
        return Inertia::render('homePage', [
            'title' => "rental mobil",
            'data' => $data,

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = new dataMobil();
        $data->namaMobil = $request -> namaMobil;
        $data->deskripsi = $request -> deskripsi;
        $data->harga = $request->harga;
        $data->pemilik = auth()->user()->email;
        $data-> save();

        return redirect()->back()->with('message', 'data sudah ditambahkan');
        


    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $car = dataMobil::find($id);

        if (!$car) {
            abort(404, 'Mobil tidak ditemukan');
        }

        return Inertia::render("detail",['car' => $car]);
    }

    public function show1(dataMobil $dataMobil){
       $data = $dataMobil::where('pemilik',auth()->user()->email)->get();
       return Inertia::render('hTambahMobil', [
        'data' => $data,

    ]);
        

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(dataMobil $dataMobil)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, dataMobil $dataMobil)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(dataMobil $dataMobil)
    {
        //
    }
}