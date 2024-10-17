import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { RiDeleteBinLine } from "react-icons/ri";

import useAppStore from '../zustand/appStore';
import { getCart, deleteCartItem, updateCartItem } from '../api/cart-api';
import CartCheckout from '../Componant/CartCheckout';
import useCartStore from '../zustand/cartStore';

export default function OrderCustomerCart({ isOpen, onClose }) {

    const [cartDetails, setCartDetails] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const token = useAppStore((state) => state.token);
    const user = useAppStore((state) => state.user);
    // const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    const isCheckoutOpen = useCartStore((state) => state.isCheckoutOpen);
    const setCheckoutOpen = useCartStore((state) => state.setCheckoutOpen);

    useEffect(() => {
        if (isOpen) {
            const fetchCartDetails = async () => {
                try {
                    const response = await getCart(token, user.user.id);
                    console.log('response.data :>> ', response.data);
                    if (response.status === 200 && response.data) {
                        setTotalAmount(response.data.total);
                        setCartDetails(response.data.cart_Items);
                    }
                } catch (error) {
                    console.error('Error fetching cart details:', error);
                    toast.error('An error occurred');
                }
            };
            fetchCartDetails();
        }
    }, [isOpen, token, user.user.id]);

    const updateCartItemHandler = async (id, newCount, price) => {
        if (newCount < 1) {
            toast.error("The quantity must be at least 1.");
            return;
        }

        try {
            const response = await updateCartItem(token, id, { count: newCount, price });
            if (response.status === 200) {
                const updatedCartDetails = cartDetails.map((item) =>
                    item.id === id ? { ...item, count: newCount, total: newCount * price } : item
                );
                setCartDetails(updatedCartDetails);

                const newTotalAmount = updatedCartDetails.reduce((acc, item) => acc + parseFloat(item.total), 0).toFixed(2);
                setTotalAmount(newTotalAmount);
            } else {
                toast.error("Failed to update cart item");
            }
        } catch (err) {
            console.log(err);
            toast.error("Failed to update cart item");
        }
    };

    const deleteCartItemHandler = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const response = await deleteCartItem(token, id);
                if (response.status === 200) {
                    const updatedCartDetails = cartDetails.filter((item) => item.id !== id);
                    setCartDetails(updatedCartDetails);

                    const newTotalAmount = updatedCartDetails.reduce((acc, item) => acc + parseFloat(item.total), 0).toFixed(2);
                    setTotalAmount(newTotalAmount);

                    toast.success("Delete item success");
                } else {
                    toast.error("Failed to delete cart item");
                }
            } catch (err) {
                console.log(err);
                toast.error("Failed to delete cart item");
            }
        }
    };
    const openCheckout = () => {
        setCheckoutOpen(true);
    };

    const closeCheckout = () => {
        setCheckoutOpen(false);
    };



    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-3xl h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
                <button onClick={onClose} className="absolute top-2 right-2 text-white font-bold text-lg hover:text-yellow"> X </button>
                <section className='flex flex-col w-full h-full'>
                    <div className='bg-red-gradient h-16 flex justify-center items-center text-white'>
                        <h1 className='text-center text-yellow font-main'>Cart</h1>
                    </div>
                    <div className='flex-1 overflow-y-auto p-4'>
                        {cartDetails.length > 0 ? (
                            cartDetails.map((item) => (
                                <div key={item.id} className='w-full h-auto mx-auto border-2 rounded-lg border-[#bfbebe5d] my-2'>
                                    <div className='flex p-6 gap-6'>
                                        <div className='w-32 h-32 rounded-lg '>
                                            <img className='w-full h-full object-cover' src={item.item.image} alt="" />
                                        </div>
                                        <div className='flex-1 flex flex-col justify-center gap-4'>
                                            <h1 className='font-main text-yellow'>{item.item.menuName}</h1>
                                            <div className='flex items-baseline gap-5'>
                                                <p className='font-head text-yellow'>Price:</p>
                                                <p className='font-head text-yellow'>{item.price} THB</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <button onClick={() => updateCartItemHandler(item.id, item.count - 1, item.price)} className='w-8 h-8 font-head'>-</button>
                                                <h1 className='font-main w-8 h-8 text-center'>{item.count}</h1>
                                                <button onClick={() => updateCartItemHandler(item.id, item.count + 1, item.price)} className='w-8 h-8 font-head'>+</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-end'>
                                            <RiDeleteBinLine onClick={() => deleteCartItemHandler(item.id)} className='w-8 h-8 hover:text-red text-gray-500 cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='flex justify-center items-center h-full'>
                                <p className='text-center font-head text-gray-500'>Your cart is empty.</p>
                            </div>
                        )}
                    </div>
                    <div className='bg-red-gradient h-16 flex items-center justify-between px-4 text-white'>
                        <button onClick={openCheckout} className='font-head p-1 rounded-md bg-yellow w-32 hover:scale-105 duration-300'>Confirm</button>
                        <div className='flex items-center gap-4'>
                            <h1>Total: </h1>
                            <h1 className='w-32 p-2 rounded-md bg-white text-red font-head text-center'>{totalAmount}</h1>
                            <h1>THB </h1>
                        </div>
                    </div>
                </section>
            </div>
            <CartCheckout cartDetails={cartDetails} closeCheckout={closeCheckout} totalAmount={totalAmount} closeOrderCart={onClose} />
        </div>
    );
}
