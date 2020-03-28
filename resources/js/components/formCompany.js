import React, {useState} from "react";
import {connect} from "react-redux";
import {addCompany} from "../redux/companyReducer";


const FormCompany =({addCompany, history})=>{

    console.log("Add c", addCompany)

    let [Name, setName]=useState("")
    let [Email, setEmail]=useState("")
    let [Logo, setLogo]=useState("")
    let [Site, setSite]=useState("")

    let sendData = (e)=>{
        e.preventDefault();
        addCompany({
            name:Name,
            email:Email,
            logo:Logo,
            site:Site }   );

        setName("")
        setEmail("")
        setLogo("")
        setSite("")

       history.push("/comopanies")

    }

    return <div>
        <form>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={Name} placeholder="name" className="form-control" id="Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">email</label>
                <div className="col-sm-10">
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={Email}  placeholder="email" className="form-control" id="email"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Logo</label>
                <div className="col-sm-10">
                    <input type="file"   id="Logo"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Site</label>
                <div className="col-sm-10">
                    <input type="text" onChange={(e)=>{setSite(e.target.value)}} value={Site}   placeholder="site" className="form-control" id="Site"/>
                </div>
            </div>
            <div>
                <button className="btn-success" onClick={sendData}>Send</button>
            </div>
        </form>
    </div>
}


let mapStateToProps =(store)=>{
    return{
        store
    }
}

export default connect(mapStateToProps,{addCompany})(FormCompany)
