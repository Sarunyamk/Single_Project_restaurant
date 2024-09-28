import { toast } from "react-toastify";
import {create} from  "zustand";
import {register,login,currentUser} from "../api/auth-api"
import { persist ,createJSONStorage} from "zustand/middleware";



const useAppStore = create(persist((set)=>({

    user:null,
    token : null,
    actionRegister : async(form)=>{

        try{

            const resp = await register(form)
            console.log(resp)
            
           
        }catch(err){
            console.log(err)
        }
    },
    actionLogin : async(form)=>{

        try{

            const resp = await login(form)
            console.log(resp)

            set({

                user : resp.data.user,
                token : resp.data.token
            })

            return resp.data.user.user.role
        }catch(err){

            console.log(err)
        }
    },
    actionLogout : ()=>{

        localStorage.clear()
        set({
            user : null,
            token : null
        })
    }
}),{

    name : "app-store",
    storage : createJSONStorage(() => localStorage)
}))

export default useAppStore



