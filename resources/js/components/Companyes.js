import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {getCompanyes} from "../redux/companyReducer";
import Company from "./Company";






const Companyes  =({getCompanyes, companyes},...props)=>{
    console.log("company props",companyes)
    useEffect(()=>{
        getCompanyes()
    },[])

   let commpayeslist = companyes.map(c=> <Company key={c.id} c={c}/>)

    return<div>
       <h1>Componies</h1>
        {commpayeslist}
    </div>
}


let mapStateToProps =(state)=>{
    return{
        companyes:state.companyReducer.companyes,
        state
    }

}

export default connect(mapStateToProps,{getCompanyes })(Companyes)
