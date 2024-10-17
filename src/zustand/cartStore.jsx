
import { create } from "zustand";


const useCartStore = create((set) => ({

    cartItems: [],

    addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),

    removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    clearCart: () => set({ cartItems: [] }),


    isCheckoutOpen: false,
    setCheckoutOpen: (value) => set({ isCheckoutOpen: value }),


}))

export default useCartStore



