import React, {useEffect} from "react";
import {connect} from "react-redux";
import {deleteEmployee, getEmployees} from "../../redux/employeeReducer";
import Employee from "./Employee";
import {getCompanies} from "../../redux/companyReducer";
import FormEmploee from "./FormEmploee";
import {NavLink} from "react-router-dom";



const Employees =({getEmployees,getCompanies,deleteEmployee, employees,companies},...props)=>{
    useEffect(()=>{
        getEmployees()
    },[])


    useEffect(()=>{
        getCompanies()
    },[])


    let companyName =(id)=>{
        if(companies.length>0){
            let fArr = companies.filter((c)=>{
                if(c.id === id){
                    return c
                }
            })

                if(fArr.length>0){
                    return fArr[0].name
                }else{
                    return "No company"
                }

        }

    }

   // console.log("companyName",companyName(1))




    return<div>
        Emploees

        <NavLink to='/employees/add'>Add Employee</NavLink>

        {
            employees.map((em)=>{

                return <Employee key={em.id} em={em} compN={companyName(em.company_id)} del={deleteEmployee}/>
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


export default connect(mapStateToProps, {getEmployees,getCompanies , deleteEmployee})(Employees)
