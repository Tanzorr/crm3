import React,{useState} from "react";
import {NavLink} from "react-router-dom";



const Company =({c})=>{

    return <div>
        <div className="containr">
            <div className="row justify-content-around">
                <div>{c.name}</div>
                <div>{c.email}</div>
                <div>{c.logo}</div>
                <div>{c.site}</div>
                {/*<div><NavLink clasName="btn-primery">Eddit</NavLink></div>*/}
                {/*<div><NavLink clasName="btn-dangers">Delete</NavLink></div>*/}
            </div>
        </div>
    </div>
}

export default Company
