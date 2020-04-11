import {companiesApi, employeeApi} from "../api/api";
import {getCompanies} from "./companyReducer";

const SET_EMPLOYEES='SET_EMPLOYEES'
const SET_EMPLOYEE = "SET_EMPLOYEE"


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
    console.log("emmploeyAC", action)
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees
            }
        case SET_EMPLOYEE:
            return {
                ...state,
                employee: state.employees.filter((e)=>{
                    if(e.id ==action.employeeId){
                        return e
                    }
                })

            }


        default:
            return state
    }
}


const setEmployeesAC =(employees,)=>{
    return{
        type:SET_EMPLOYEES,
        employees
    }
}

const setEmployeeAC =(id)=>{
    return {
        type:SET_EMPLOYEE,
        employeeId:id
    }
}


export const getEmployees =()=>{
    return async (dispatch)=>{
        let data = await employeeApi.getAll()
        dispatch(setEmployeesAC(data))
    }
}

export const addEmploee = (data)=>{
    return async (dispatch)=>{
        await employeeApi.add(data)
        getEmployees()
    }
}

export const getSingleEmployee =(id)=>{

    return async (dispatch)=>{
        dispatch(setEmployeeAC(id))
    }
}

export const deleteEmployee = (id)=>{
    return async (dispatch)=>{
        await employeeApi.delete(id)

       dispatch(getEmployees())
    }
}



export default employeeReducer
