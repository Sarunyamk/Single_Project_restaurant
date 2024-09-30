import {create} from  "zustand";
import { persist ,createJSONStorage} from "zustand/middleware";
import { getProfile, editProfile } from '../api/user-api';
import { toast } from 'react-toastify';

const useUserStore = create(persist((set)=> ({
    
    user:null ,
    token : null,

    fetchProfile : async() => {

        try{

            const resp = await getProfile(token);
            setUser(resp.data);
        }catch(err){
            toast.error('Error fetching profile');
        }
    },
    handleUpdateProfile : async(e) => {
        try{
            const resp = await editProfile(user.id, token, user);
            fetchProfile();
            toast.success('Profile updated successfully!');
        }catch(err){

            toast.error('Error updating profile'); 
        }
    }

  }),{
    name : "user-store",
    storage : createJSONStorage(() => localStorage)
  }));
  
  export default useUserStore;