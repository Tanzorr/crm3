import React,{useState} from "react";
import {NavLink} from "react-router-dom";



const Company =({c,del, ...props})=>{



    return <div>
        <div className="containr">
            <div className="row justify-content-around mt-3">
                <div>{c.name}</div>
                <div>{c.email}</div>
                <div>{c.logo}</div>
                <div>{c.site}</div>
                <div><NavLink to={`/edit/${c.id}`} className="btn btn-primary p-1" >Edit</NavLink></div>
                <div><button className="btn btn-danger p-1" onClick={()=>{del(c.id)}} >Delete</button></div>

            </div>
        </div>
    </div>
}

export default Company
