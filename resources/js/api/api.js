import * as axios from "axios";

let baseUrl = "/api"

export const companiesApi ={
    get(){
        alert("get")
        return axios.get(`${baseUrl}/comopanies`)
            .then(resoponce=>{
                return resoponce.data
            })
    }
}


