<?php

namespace App\Http\Controllers;

use App\Company;
use DemeterChain\C;
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
        $companies= Company::all();
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
        $company = new Company();
        $company->name = $request->name;
        $company->email = $request->email;
        $company->logo = $request->logo;
        $company->site = $request->site;
         $company->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Companyes  $companies
     * @return \Illuminate\Http\Response
     */
    public function show(Company $companies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Companyes  $companies
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        dd(34);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Companyes  $companies
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $company = Company::find($id);
       $company->name=$request->name;
       $company->email=$request->emeil;
       $company->logo=$request->logo;
       $company->site=$request->site;
       $company->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $companies
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //dd($id);
        $company = Company::destroy($id);
    }
}
