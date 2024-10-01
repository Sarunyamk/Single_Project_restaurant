import create from 'zustand';
import { getProfile, editProfile } from '../api/user-api';
import { toast } from 'react-toastify';

const useUserStore = create(persist((set) => ({
  

}),{
    name : "user-store",
    storage : createJSONStorage(() => localStorage)
}));

export default useUserStore;
