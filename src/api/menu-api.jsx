import axios from 'axios'



export const showAllMenu = ()=>{
    return  axios.get("http://localhost:3000/menu/allmenu")
}


