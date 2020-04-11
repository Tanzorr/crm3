import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {addEmploee, getSingleEmployee} from "../../redux/employeeReducer";
import Select from 'react-select'
import {getCompanies} from "../../redux/companyReducer";
import {employeeApi} from "../../api/api";



const EditEmployee =(props)=>{

    useEffect(()=>{
            props.getCompanies()
        }
        ,[])




    let [FirstName, setFirstName]=useState("")
    let [LastName, setLastName]=useState("")
    let [Company, setCompany]=useState({
        value:1,
        label:"Company"
    })
    let [CompanyId, seCompanyId]=useState(1)
    let [Email, setEmail]=useState("")
    let [Phone, setPhone]=useState("")
   let id =props.match.params.employeeId


    useEffect(()=>{
        props.getSingleEmployee(id)
    },[id])

    let curentCompany
    if(CompanyId){
        let curentCompanyArr =  props.companies.filter((c)=>{
            if(c.id == CompanyId){
                return c
            }
        })
        curentCompany = curentCompanyArr[0].name
    }



    let sendData = (e)=>{
        e.preventDefault();
            employeeApi.edit(id,{
                FirstName,
                LastName,
                company_id:CompanyId,
                email:Email,
                phone_number:Phone
            })
        props.history.push("/emploees")
    }


    let getDefoultData =(data)=>{
        if(data){
            setFirstName(data.FirstName)
            setLastName(data.LastName)
            seCompanyId(data.company_id)
            setEmail(data.email)
            setPhone(data.phone_number)
        }

    }

    useEffect(()=>{
        getDefoultData(props.employee)
    },[props.employee])

    let options2 =[]

    props.companies.map((com)=>{
        options2.push({
            value:com.id,
            label:com.name
        })
    })


        console.log('CompanyId',CompanyId)

    return <div>
        <form>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text"  onChange={(e)=>{setFirstName(e.target.value)}} value={FirstName} placeholder="First name" className="form-control" id="Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text"  onChange={(e)=>{setLastName(e.target.value)}} value={LastName} placeholder="Last name" className="form-control" id="Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Company Name</label>
                <Select
                    className="mb-3 col-sm-10"
                    onChange={(e)=>{ seCompanyId(e.value)}}
                    label={CompanyId}
                    value={CompanyId}
                    options={options2}
                    placeholder={curentCompany}
                />

            </div>

            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">email</label>
                <div className="col-sm-10">
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={Email}  placeholder="email" className="form-control" id="email"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input type="text" onChange={(e)=>{setPhone(e.target.value)}} value={Phone}  placeholder="Phone" className="form-control" id="email"/>
                </div>
            </div>

            <div>
                <button className=" btn btn-success" onClick={sendData}>Send</button>
            </div>
        </form>
    </div>
}


let mapStateToProps =(store)=>{
    return{
        store,
        companies:store.companyReducer.companies,
        employee: store.employeeReducer.employee[0]
    }
}

export default connect(mapStateToProps,{addEmploee, getCompanies , getSingleEmployee})(EditEmployee)
