import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {editSingleCompany, getCompany} from "../redux/companyReducer";


const editCompany =(props)=>{
    let [Name, setName]=useState("")
    let [Email, setEmail]=useState("")
    let [Logo, setLogo]=useState("")
    let [Site, setSite]=useState("")
    let id =props.match.params.companyId

    console.log("id",id)

    useEffect(()=>{
        props.getCompany(id)
    },[id])

    let company =props.copmpany

    console.log("editProps",props.copmpany)
    console.log("company",company.name)



    let sendCahges=(e)=>{
        e.preventDefault()
            props.editSingleCompany(id,{
                id:id,
                name:Name,
                emeil:Email,
                logo:Logo,
                site:Site
            })
       // history.push("/comopanies")
    }

   let getDefalutData = (data)=>{
        setName(data.name)
        setEmail(data.email)
       // setLogo(data.logo)
        setSite(data.site)
    }
useEffect(()=>{
   getDefalutData(company)
},[company])






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
                <button className=" btn btn-success" onClick={sendCahges}>Edit</button>
            </div>
        </form>
    </div>

}

let mapStateToProps =(state)=>{
    return{
        state,
        copmpany:state.companyReducer.company



    }
}


export default  connect(mapStateToProps,{getCompany,editSingleCompany})(editCompany);
