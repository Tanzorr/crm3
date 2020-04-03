<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
        protected $fillable =["name",'email','logo','site'];

    public function emploee()
    {
        return $this->hasOne('App\Employee');
    }
}
