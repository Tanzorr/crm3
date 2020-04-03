import React from "react";



const Employee =({em})=>{
    console.log("SingleEmploe", em)
        return <div>
            <div className="containr">
                <div className="row justify-content-around mt-3">
                    <div>{em.FirstName}</div>
                    <div>{em.LastName}</div>
                    <div>{em.company_id}</div>
                    <div>{em.email}</div>
                    <div>{em.phone_number}</div>
                    <div><a>Edit</a></div>
                    <div><button className="btn btn-danger">Delete</button></div>

                </div>
            </div>
        </div>

}

export default Employee
