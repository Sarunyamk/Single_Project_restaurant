import axios from 'axios'



export const showAllMenu = ()=>{
    return  axios.get("http://localhost:3000/menu/allmenu")
}
export const showMainMenu = ()=>{
    return  axios.get("http://localhost:3000/menu/main-menu")
}
export const showSaladMenu = ()=>{
    return  axios.get("http://localhost:3000/menu/salad-menu")
}
export const showSwSnackMenu = ()=>{
    return  axios.get("http://localhost:3000/menu/snack-menu")
}
export const showBeverageMenu = ()=>{
    return  axios.get("http://localhost:3000/menu/beverage-menu")
}


