import React from "react";



const Company =({c})=>{
    return <div>
        <div className="containr">
            <div className="row justify-content-around">
                <div>{c.name}</div>
                <div>{c.email}</div>
                <div>{c.logo}</div>
                <div>{c.site}</div>
            </div>
        </div>
    </div>
}

export default Company
