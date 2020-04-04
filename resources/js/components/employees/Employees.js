import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getEmployees} from "../../redux/employeeReducer";
import Employee from "./Employee";
import {getCompanies} from "../../redux/companyReducer";
import FormEmploee from "./FormEmploee";



const Employees =({getEmployees,getCompanies, employees,companies},...props)=>{
    useEffect(()=>{
        getEmployees()
    },[])

    useEffect(()=>{
        getCompanies()
    },[])







    return<div>
        Emploees

        <FormEmploee/>

        {
            employees.map((em)=>{
                return companies.map((com)=>{
                    if(com.id === em.company_id){

                        return <Employee key={Math.floor(Math.random()*3000)} em={em} compN={com.name}/>
                    }
                    return <Employee key={Math.floor(Math.random()*3000)}  em={em} compN="unimploiment"/>

                })
            })
        }
    </div>
}

let mapStateToProps =(state)=>{
    return{
        state,
        employees:state.employeeReducer.employees,
        companies:state.companyReducer.companies

    }
}


export default connect(mapStateToProps, {getEmployees,getCompanies })(Employees)
