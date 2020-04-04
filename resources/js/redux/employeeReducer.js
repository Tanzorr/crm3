import {companiesApi, employeeApi} from "../api/api";

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
        let data = await employeeApi.get()
        console.log("Employees data",data)
        dispatch(setEmployeesAC(data))
    }
}

export const getCompaniesName=(id)=>{
    return async (dispatch)=>{
        let data = await companiesApi.getSingle(id)
    }
}



export default employeeReducer
