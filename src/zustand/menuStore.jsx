import {create} from  "zustand";
import { persist ,createJSONStorage} from "zustand/middleware";
import { showAllMenu,showMainMenu,showSaladMenu,showSwSnackMenu,showBeverageMenu} from '../api/menu-api';


const useMenuStore = create(persist((set)=> ({

  menu: [],
  currentPage: 1,
  itemsPerPage: 8,
  
  setCurrentPage: (page) => set({ currentPage: page }),

  fetchAllMenu: async () => {
    try {

      const resp = await showAllMenu();
      set({ menu: resp.data, currentPage: 1 });

    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  },

  fetchMainMenu: async () => {
    try {

      const resp = await showMainMenu();
      set({ menu: resp.data, currentPage: 1 });

    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  },

  fetchSaladMenu: async () => {
    try {

      const resp = await showSaladMenu();
      set({ menu: resp.data, currentPage: 1 });

    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  },

  fetchSwSnackMenu: async () => {
    try {

      const resp = await showSwSnackMenu();
      set({ menu: resp.data, currentPage: 1 });

    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  },

  fetchBeverageMenu: async () => {
    try {

      const resp = await showBeverageMenu();
      set({ menu: resp.data, currentPage: 1 });
      
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  },

}),{
    name : "menu-store",
    storage : createJSONStorage(() => localStorage)
}))

export default useMenuStore