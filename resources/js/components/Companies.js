import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {addCompany, deleteCompany, getCompanies} from "../redux/companyReducer";
import Company from "./Company";
import AppContainer from "./AppContainer";
import AddCompany from "./formCompany";
import {NavLink} from "react-router-dom";






const Companies  =({getCompanies, deleteCompany, companies}, ...props)=>{

    useEffect(()=>{
        getCompanies()
    },[])

   let commpayeslist = companies.map(c=> <Company key={c.id} del={deleteCompany}  c={c}/>)

    return<div>
       <h1>Componies</h1>
        <NavLink to='/add'>Add company</NavLink>
        {commpayeslist}
    </div>
}


let mapStateToProps =(state)=>{
    return{
        companies:state.companyReducer.companies,
        state
    }

}

export default connect(mapStateToProps,{getCompanies, addCompany, deleteCompany })(Companies)
