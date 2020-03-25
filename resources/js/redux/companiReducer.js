import {companiesApi }from "../api/api"

const  SET_COMPANIES = "SET_COMPANIES"


const initialState={
    companies:[]
}



const companiReducer=(state=initialState, action)=>{
    switch (action) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.companies
            }


        default:
            return state
    }
}

const setCompanies =(companies)=>{type:SET_COMPANIES, companies}


export const getCompanies =()=>{
    return async (dispatch)=>{
        let data = await companiesApi.get()
        dispatch(setCompanies(data.items))
    }
}






export default companiReducer
