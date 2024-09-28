import axios from 'axios'

export const getProfile = (token)=>{

    return axios.get("http://localhost:3000/user",
        {headers : {
            Authorization : `Bearer ${token}`
        }}
    )}
    

export const editProfile = (id,token,formData)=> {

    return axios.put("http://localhost:3000/user/edit-profile/"+id,formData,{

        headers : {
            Authorization : `Bearer ${token}`
        }
    })

}
