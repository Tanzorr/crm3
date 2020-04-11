<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
     protected $fillable=["FirstName","LastName","company_id","email","phone"];

    public function company(){
        return $this->belongsTo("App/Company");
    }

}
