import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {addCompany, deleteCompany, getCompanyes} from "../redux/companyReducer";
import Company from "./Company";
import AppContainer from "./AppContainer";
import AddCompany from "./formCompany";
import {NavLink} from "react-router-dom";






const Companyes  =({getCompanyes, deleteCompany, companyes},...props)=>{
    console.log("company props",companyes)
    useEffect(()=>{
        getCompanyes()
    },[])

   let commpayeslist = companyes.map(c=> <Company key={c.id} del={deleteCompany}  c={c}/>)

    return<div>
       <h1>Componies</h1>
        <NavLink to='/formCompany'>Add company</NavLink>
        {commpayeslist}
    </div>
}


let mapStateToProps =(state)=>{
    return{
        companyes:state.companyReducer.companyes,
        state
    }

}

export default connect(mapStateToProps,{getCompanyes, addCompany, deleteCompany })(Companyes)
