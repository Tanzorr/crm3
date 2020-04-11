<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $employees=Employee::all();
        return $employees;

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

        $employee = new Employee();
        $employee->FirstName = $request->FirstName;
        $employee->LastName = $request->LastName;
        $employee->company_id = $request->coampany_id;
        $employee->email = $request->email;
        $employee->phone_number = $request->phone_number;

        $employee->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $emploee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $emploee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee  $emploee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $emploee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $emploee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        $employee->FirstName = $request->FirstName;
        $employee->LastName = $request->LastName;
        $employee->company_id= $request->company_id;
        $employee->email = $request->email;
        $employee->phone_number = $request->phone_number;
        $employee->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee  $emploee
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        Employee::destroy($id);
    }
}
