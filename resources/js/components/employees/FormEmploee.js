import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {addEmploee} from "../../redux/employeeReducer";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import {getCompanies} from "../../redux/companyReducer";
import {employeeApi} from "../../api/api";



const FormEmploee =({ history, companies,getCompanies},...props)=>{

    useEffect(()=>{
            getCompanies()
        }
    ,[])

    let [FirstName, setFistName]=useState("")
    let [LastName, setLastName]=useState("")
    let [Company, setCompany]=useState({
        value:1,
        label:"Company"
    })
    let [CompanyId, seCompanyId]=useState(1)
    let [Email, setEmail]=useState("")
    let [Phone, setPhone]=useState("")

    console.log("companies id", CompanyId)

    let sendData = (e)=>{
        e.preventDefault();

        employeeApi.add({
            FirstName,
            LastName,
            coampany_id:Company.value,
            email:Email,
            phone_number:Phone.trim()

        })

        setFistName("")
        setFistName("")

     //   seCompanyId("")
        setEmail("")
        setPhone("")
        history.push("/emploees")

    }



    let options2 =[]


    companies.map((com)=>{
        options2.push({
            value:com.id,
            label:com.name
        })
    })



    console.log("options2",options2)
    console.log("compny for select",Company)

    return <div>
        <form>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text"  onChange={(e)=>{setFistName(e.target.value)}} value={FirstName} placeholder="First name" className="form-control" id="Name"/>
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
                    onChange={setCompany}
                    label={Company.label}
                    value={Company.id}
                    options={options2}
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
        companies:store.companyReducer.companies
    }
}

export default connect(mapStateToProps,{addEmploee, getCompanies })(FormEmploee)
