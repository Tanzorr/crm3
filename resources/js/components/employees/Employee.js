import React from "react";






const Employee =({em,compN,del})=>{
    return <div>

            <div className="containr">
                <div className="row justify-content-around mt-3">
                    <div>{em.FirstName}</div>
                    <div>{em.LastName}</div>
                    <div>{compN}</div>
                    <div>{em.email}</div>
                    <div>{em.phone_number}</div>
                    <div><a className="btn btn-primary">Edit</a></div>
                    <div><button onClick={()=>{del(em.id)}} className="btn btn-danger">Delete</button></div>

                </div>
            </div>
        </div>

}

let mapStateToProps =(state)=>{
    return{
        state
    }
}

export default Employee
