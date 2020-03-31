import {companiesApi }from "../api/api"

const  SET_COMPANIES = "SET_COMPANIES"
const   SET_COMPANY = "SET_COMPANY"
const ADD_COMPANIE ="ADD_COMPANIE"
const DELETE_COMPANY="DELETE_COMPANY"
const EDIT_COMPANY="EDIT_COMPANY"


const initialState={
    companyes:[
        {   id:1,
            name:"",
            email:"",
            logo:"",
            site:""
        }],
    company:{}
}



const companyReducer=(state=initialState, action)=>{
    console.log("state",state)
    console.log("action",action)
    switch (action.type) {
        case DELETE_COMPANY:

            return {
                ...state,
                companyes: state.companyes.filter(
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
                companyes: action.companyes
            }

        case  SET_COMPANY:

            return {
                ...state,
                company:state.companyes.filter((c)=>{
                    if(c.id==action.id){
                        return c;
                    }
                   })[0]
            }
            default:
            return state
    }
}

const setCompanyesAC =(companyes)=>{
    return{
        type:SET_COMPANIES,
        companyes
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



export const getCompanyes =()=>{
    return async (dispatch)=>{
        let data = await companiesApi.get()
        console.log("dataCompany", data);
        dispatch(setCompanyesAC(data))
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
          // getCompanyes()

    }
}

export const deleteCompany = (id)=>{
    return async (dispatch)=>{
        dispatch(deleteCompaniesAC(id))
        dispatch(getCompanyes())
    }
}






export default companyReducer
