import {companiesApi }from "../api/api"

const  SET_COMPANIES = "SET_COMPANIES"
const ADD_COMPANIE ="ADD_COMPANIE"


const initialState={
    companyes:[]
}



const companyReducer=(state=initialState, action)=>{
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companyes: action.companyes
            }
        case ADD_COMPANIE :
            return {
                ...state.companies.push(action.company)
            }



        default:
            return state
    }
}

const setCompaniesAC =(companyes)=>{
    return{
        type:SET_COMPANIES,
        companyes
        }
    }
const addCompaniesAC =(company)=>{
    return {
        type:ADD_COMPANIE,
        company
    }
}



export const getCompanyes =()=>{
    return async (dispatch)=>{
        let data = await companiesApi.get()
        console.log("dataCompany", data);
        dispatch(setCompaniesAC(data))
    }
}

export const addCompani =(data)=>{
    return async (dispatch)=>{
        await  companiesApi.add(data)
        dispatch(addCompaniesAC(data))
    }
}






export default companyReducer
