import * as axios from "axios";

let baseUrl = "/api"

export const companiesApi ={
    get(){
        return axios.get(`${baseUrl}/companies`)
            .then(resoponce=>{
                return resoponce.data
            })
    },
    add(data){
        return axios.post(`${baseUrl}/companies`,data)
            .then(responce=> console.log("responce data",data))
    },

    edit(id,data){
        console.log("editDatainApi",data)
        return axios.put(`/api/companies/${id}`,data).then(res=>console.log("res edit",res))

    },


    delete(id){

        return axios.delete(`${baseUrl}/companies/${id}`).then(response=> console.log("responce data", response))
    }

}



export const employeeApi={
    get(){
        return axios.get(`${baseUrl}/employees`)
            .then(resoponce=>{
                return resoponce.data
            })
    },
}
