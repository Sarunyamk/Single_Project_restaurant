import axios from 'axios'

export const register = (form)=>{

    return axios.post("http://localhost:3000/auth/register",form)
}
    

export const login = (form)=> {

    return axios.post("http://localhost:3000/auth/login",form)

}
export const currentUser = (token)=> {

    return axios.post("http://localhost:3000/auth/current-user",{},{

        headers : {
            Authorization : `Bearer ${token}`
        }
    })

}
