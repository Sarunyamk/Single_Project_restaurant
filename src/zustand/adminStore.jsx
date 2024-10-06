
import {create} from  "zustand";
import {createMenu} from "../api/admin-api"
import { persist ,createJSONStorage} from "zustand/middleware";
import { toast } from 'react-toastify';



const useAdminStore = create(persist((set)=>({

    
    actionCreateMenu: async(form)=>{
        
        try {
            
            const resp = await createMenu(form);
            toast.success(resp.data.message || "create menu success");
            return resp.data;  
        } catch(err) {
            toast.error(err.response.data.message);
            throw err;  
        }
    },
    
    
}),{

    name : "admin-store",
    storage : createJSONStorage(() => localStorage)
}))

export default useAdminStore



