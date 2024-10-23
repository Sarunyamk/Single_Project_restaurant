
import { create } from "zustand";


const useCartStore = create((set) => ({

    cartItems: [],

    addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),

    removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    clearCart: () => set({ cartItems: [] }),


    isCheckoutOpen: false,
    setCheckoutOpen: (value) => set({ isCheckoutOpen: value }),


    totalCount: 0, // ค่าเริ่มต้นของ totalCount
    setTotalCount: (count) => set({ totalCount: count }), // ฟังก์ชันสำหรับอัปเดต totalCount
    incrementTotalCount: () => set((state) => ({ totalCount: state.totalCount + 1 })),
    decrementTotalCount: () => set((state) => ({ totalCount: state.totalCount - 1 })),

    cartDetails: [],
    setCartDetails: (details) => set({ cartDetails: details }),



}))

export default useCartStore



