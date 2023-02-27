import axios from "axios"

const baseURL = 'http://localhost:5000/api/auth'

const AuthApiLogin = (email, password) => {
    return axios.post(`${baseURL}/login`, {email, password})
    .then(res => {
      if(res.data.token){
        console.log(res)
      }
      // return res.data
    })
    .catch(err => {
      console.log(err)
    })
  }

export default AuthApiLogin