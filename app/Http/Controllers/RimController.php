<?php

namespace App\Http\Controllers;

use App\Rim;
use Illuminate\Http\Request;

class RimController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rims = Rim::all();

        return $rims->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validate rim credentials
        $rim = $request->validate([
            'name' => 'required',
            'size' => 'required',
            'color' => 'required',
            'price' => 'required',
            'image' => 'required | image',
        ]);

        //store the rim image and get path to the stored rim
        $path = $rim['image']->store('rims');

        //assign the path to the rim image field of Rim model
        $rim['image'] = $path;
        
        //store the rim
        Rim::create($rim);

        return response()->json(['created' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Rim  $rim
     * @return \Illuminate\Http\Response
     */
    public function show(Rim $rim)
    {
        return $rim->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Rim  $rim
     * @return \Illuminate\Http\Response
     */
    public function edit(Rim $rim)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Rim  $rim
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rim $rim)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Rim  $rim
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rim $rim)
    {
        //
    }
}
