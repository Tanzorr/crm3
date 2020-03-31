import * as axios from "axios";

let baseUrl = "/api"

export const companiesApi ={
    get(){
        return axios.get(`${baseUrl}/companyes`)
            .then(resoponce=>{
                return resoponce.data
            })
    },
    add(data){
        return axios.post(`${baseUrl}/companyes`,data)
            .then(responce=> console.log("responce data",data))
    },

    edit(id,data){
        console.log("editDatainApi",data)
        return axios.put(`/api/companyes/${id}`,data).then(res=>console.log("res edit",res))

    },


    delete(id){

        return axios.delete(`${baseUrl}/companyes/${id}`).then(response=> console.log("responce data", response))
    }

}


