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

    delete(){

    }

}


