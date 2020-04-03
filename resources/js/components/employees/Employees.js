import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getEmployees} from "../../redux/employeeReducer";
import Employee from "./Employee";


const Employees =({getEmployees,employees},props)=>{
    useEffect(()=>{
        getEmployees()
    },[])

    console.log("Employee props", employees)

    let employeesList = employees.map((em)=>{
        return <Employee key={em.id} em={em}/>
    })

    return<div>
        Emploees
        {employeesList}
    </div>
}

let mapStateToProps =(state)=>{
    return{
        state,
        employees:state.employeeReducer.employees
    }
}


export default connect(mapStateToProps, {getEmployees})(Employees)
