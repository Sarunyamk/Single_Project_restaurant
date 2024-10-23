
import { create } from "zustand";
import { createMenu } from "../api/admin-api"
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from 'react-toastify';



const useAdminStore = create(persist((set) => ({


    actionCreateMenu: async (formData, token) => {

        try {

            const resp = await createMenu(formData, token);
            toast.success(resp.data.message || "create menu success");
            console.log(resp)
            // return resp.data;  
        } catch (err) {
            toast.error(err.response.data.message);
            throw err;
        }
    },


}), {

    name: "admin-store",
    storage: createJSONStorage(() => localStorage)
}))

export default useAdminStore



