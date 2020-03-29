import {companiesApi }from "../api/api"

const  SET_COMPANIES = "SET_COMPANIES"
const ADD_COMPANIE ="ADD_COMPANIE"
const DELETE_COMPANY="DELETE_COMPANY"


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
    console.log("state",state)
    console.log("action",action.type)
    switch (action.type) {
        case DELETE_COMPANY:

            return {
                ...state,
                companyes: state.companyes.filter(
                    (c)=>{
                        if (c!== action.id){
                            return c
                        }
                    }
                )
            }
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

const deleteCompaniesAC =(id)=>{
    return {
        type:DELETE_COMPANY,
        id
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

export const deleteCompany = (id)=>{
    return async (dispatch)=>{
        await companiesApi.delete(id)
        dispatch(deleteCompaniesAC(id))
        dispatch(getCompanyes())
    }
}






export default companyReducer
