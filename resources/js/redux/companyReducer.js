import {companiesApi }from "../api/api"

const  SET_COMPANIES = "SET_COMPANIES"
const ADD_COMPANIE ="ADD_COMPANIE"


const initialState={
    companyes:[
        {   id:1,
            name:"",
            email:"",
            logo:"",
            site:""
        }

    ]
}



const companyReducer=(state=initialState, action)=>{
    console.log("action",action)
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companyes: action.companyes
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

export const addCompany =(data)=>{
    return async (dispatch)=>{

        await  companiesApi.add(data)
       dispatch(addCompaniesAC(data))
    }
}






export default companyReducer
