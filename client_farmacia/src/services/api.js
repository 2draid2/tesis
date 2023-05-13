import axios from "axios"

export default () =>{
   return axios.create({
      baseURL: "http://192.168.42.129:4000/"
   })
}