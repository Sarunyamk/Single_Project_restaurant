
import {create} from  "zustand";
import {register,login} from "../api/auth-api"
import { persist ,createJSONStorage} from "zustand/middleware";
import { toast } from 'react-toastify';



const useAppStore = create(persist((set)=>({

    user:null,
    token : null,

    actionRegister : async(form)=>{
        
        try {
            
            const resp = await register(form);
            toast.success(resp.data.message || "Register success");
            return resp.data;  
        } catch(err) {
            toast.error(err.response.data.message);
            throw err;  
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

            toast.success(`Welcome ${resp.data.user.user.firstname}`)
            return resp
        }catch(err){

            toast.error(err.response.data.message)
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



