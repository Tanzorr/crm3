import {companiesApi, employeeApi} from "../api/api";
import {getCompanies} from "./companyReducer";

const SET_EMPLOYEE='SET_EMPLOYEE'


const initialState= {
    employees: [],
    employee: {
        id: null,
        firstName: null,
        lastName: null,
        companyName:null,
        companyId: null,
        email: null,
        phone: null
    }
}


const employeeReducer=(state=initialState, action)=>{
    switch (action.type) {
        case SET_EMPLOYEE:
            return {
                ...state,
                employees: action.employees
            }

        default:
            return state
    }
}


const setEmployeesAC =(employees,)=>{
    return{
        type:SET_EMPLOYEE,
        employees
    }
}


export const getEmployees =()=>{
    return async (dispatch)=>{
        let data = await employeeApi.getAll()
        console.log("Employees data",data)
        dispatch(setEmployeesAC(data))
    }
}

export const addEmploee = (data)=>{
    return async (dispatch)=>{
        await employeeApi.add(data)
        getEmployees()
    }
}

export const deleteEmployee = (id)=>{
    return async (dispatch)=>{
        await employeeApi.delete(id)

       dispatch(getEmployees())
    }
}



export default employeeReducer
