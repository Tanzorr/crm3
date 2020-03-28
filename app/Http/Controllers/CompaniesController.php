<?php

namespace App\Http\Controllers;

use App\Companyes;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $companies= Companyes::all();
        return  $companies;
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
        $company = new Companyes();
        $company->name = $request->name;
        $company->email = $request->email;
        $company->logo = $request->logo;
        $company->site = $request->site;
         $company->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Companyes  $companyes
     * @return \Illuminate\Http\Response
     */
    public function show(Companyes $companyes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Companyes  $companies
     * @return \Illuminate\Http\Response
     */
    public function edit(Companyes $companies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Companyes  $companies
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Companyes $companies)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Companyes  $companies
     * @return \Illuminate\Http\Response
     */
    public function destroy(Companyes $companies)
    {
        $company = Companyes::destroy($companies);
    }
}
