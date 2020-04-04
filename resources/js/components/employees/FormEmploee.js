import React, {useState,useEffect} from "react";
import {connect} from "react-redux";

import {addEmploee} from "../../redux/employeeReducer";



const FormEmploee =({ history, companies},...props)=>{

    console.log("companies add emploee", companies)


    let [FirstName, setFistName]=useState("")
    let [LastName, setLastName]=useState("")
    let [CoampanyName, setCompanyName]=useState("")
    let [CoampanyId, seCompanyId]=useState("")
    let [Email, setEmail]=useState("")
    let [Phone, setPhone]=useState("")

    let sendData = (e)=>{
        e.preventDefault();


        setFistName("")
        setFistName("")
        setCompanyName("")
        seCompanyId("")
        setEmail("")
        setPhone("")
        history.push("/comopanies")

    }

    let options = companies.map((com)=>{
            return`<option value="${com.id}">${com.name}</option>`

        })

    return <div>
        <form>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text"  onChange={(e)=>{setFistName(e.target.value)}} value={FirstName} placeholder="name" className="form-control" id="Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text"  onChange={(e)=>{setLastName(e.target.value)}} value={LastName} placeholder="name" className="form-control" id="Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Company Name</label>
                <select name="company" id="">
                    {options}
                </select>

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
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={Email}  placeholder="email" className="form-control" id="email"/>
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

export default connect(mapStateToProps,{addEmploee })(FormEmploee)
