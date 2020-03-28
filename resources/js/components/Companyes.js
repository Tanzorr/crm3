import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {addCompany, getCompanyes} from "../redux/companyReducer";
import Company from "./Company";
import AppContainer from "./AppContainer";
import AddCompany from "./formCompany";
import {NavLink} from "react-router-dom";






const Companyes  =({getCompanyes, addCompany, companyes},...props)=>{
    console.log("company props",companyes)
    useEffect(()=>{
        getCompanyes()
    },[])

   let commpayeslist = companyes.map(c=> <Company key={c.id} c={c}/>)

    return<div>
       <h1>Componies</h1>
        <NavLink to='/addCompany'>Add company</NavLink>
        {commpayeslist}
    </div>
}


let mapStateToProps =(state)=>{
    return{
        companyes:state.companyReducer.companyes,
        state
    }

}

export default connect(mapStateToProps,{getCompanyes, addCompany })(Companyes)
