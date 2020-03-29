import React,{useState} from "react";
import {NavLink} from "react-router-dom";



const Company =({c,del})=>{

    return <div>
        <div className="containr">
            <div className="row justify-content-around">
                <div>{c.name}</div>
                <div>{c.email}</div>
                <div>{c.logo}</div>
                <div>{c.site}</div>
                <div><a className="btn-danger p-1" onClick={()=>{del(c.id)}} >Delete</a></div>

            </div>
        </div>
    </div>
}

export default Company
