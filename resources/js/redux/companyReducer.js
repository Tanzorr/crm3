import {companiesApi }from "../api/api"

const  SET_COMPANIES = "SET_COMPANIES"
const   SET_COMPANY = "SET_COMPANY"
const ADD_COMPANIE ="ADD_COMPANIE"
const DELETE_COMPANY="DELETE_COMPANY"
const EDIT_COMPANY="EDIT_COMPANY"


const initialState={
    companies:[
        {   id:1,
            name:"",
            email:"",
            logo:"",
            site:""
        }],
    company:{}
}



const companyReducer=(state=initialState, action)=>{
    switch (action.type) {
        case DELETE_COMPANY:

            return {
                ...state,
                companies: state.companies.filter(
                    (c)=>{
                        if (c.id!== action.id){
                            return c
                        }
                    }
                )
            }
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.companies
            }

        case  SET_COMPANY:

            return {
                ...state,
                company:state.companies.filter((c)=>{
                    if(c.id==action.id){
                        return c;
                    }
                   })[0]
            }
            default:
            return state
    }
}

const setCompaniesAC =(companies)=>{
    return{
        type:SET_COMPANIES,
        companies
        }
    }

const setCompanyAC =(id)=>{
    return{
        type:SET_COMPANY,
        id
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

const editCompanyAC =(id)=>{
    return{
        type:EDIT_COMPANY,
        id
    }
}



export const getCompanies =()=>{
    return async (dispatch)=>{
        let data = await companiesApi.getAll()
        dispatch(setCompaniesAC(data))
    }
}

export const  getCompany =(id)=>{
    return  async (dispatch)=>{
        dispatch(setCompanyAC(id))
    }

}

export const addCompany =(data)=>{
    return async (dispatch)=>{
        await  companiesApi.add(data)
       dispatch(addCompaniesAC(data))
    }
}

export const  editSingleCompany=(id,data)=>{
    return async ()=>{
        await companiesApi.edit(id,data)
          // getCompanies()

    }
}

export const deleteCompany = (id)=>{
    return async (dispatch)=>{
        await companiesApi.delete(id)

        dispatch(getCompanies())
    }
}






export default companyReducer
