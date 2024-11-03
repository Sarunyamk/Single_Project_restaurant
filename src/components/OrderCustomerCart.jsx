import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { RiDeleteBinLine } from "react-icons/ri";


import useAppStore from '../stores/appStore';
import { getCart, deleteCartItem, updateCartItem } from '../api/cart-api';
import CartCheckout from './CartCheckout';
import useCartStore from '../stores/cartStore';
import { useTranslation } from 'react-i18next';


export default function OrderCustomerCart({ isOpen, onClose }) {

    const { t } = useTranslation();



    const [totalAmount, setTotalAmount] = useState(0);

    const token = useAppStore((state) => state.token);
    const user = useAppStore((state) => state.user);
    const isCheckoutOpen = useCartStore((state) => state.isCheckoutOpen);
    const setCheckoutOpen = useCartStore((state) => state.setCheckoutOpen);
    const setTotalCount = useCartStore((state) => state.setTotalCount);
    const cartDetails = useCartStore((state) => state.cartDetails);
    const setCartDetails = useCartStore((state) => state.setCartDetails);



    useEffect(() => {
        if (isOpen) {
            const fetchCartDetails = async () => {
                try {
                    const response = await getCart(token, user.user.id);
                    if (response.status === 200 && response.data) {
                        setTotalAmount(response.data.total);
                        setCartDetails(response.data.cart_Items);

                        const totalCount = response.data.cart_Items.reduce((acc, item) => acc + item.count, 0);
                        setTotalCount(totalCount);

                    }
                } catch (error) {
                    toast.error(t('cart.errorOccurred'));
                }
            };
            fetchCartDetails();
        }
    }, [isOpen, token, user.user.id]);


    const updateCartItemHandler = async (id, newCount, price) => {
        if (newCount < 1) {
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
                toast.error(t('cart.updateFailed'));
            }
        } catch (err) {
            console.log(err);
            toast.error(t('cart.updateFailed'));
        }
    };

    const deleteCartItemHandler = async (id) => {
        const result = await Swal.fire({
            title: t('cart.confirmDeleteTitle'),
            text: t('cart.confirmDeleteText'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: t('cart.confirmDeleteConfirm')
        });

        if (result.isConfirmed) {
            try {
                const response = await deleteCartItem(token, id);
                if (response.status === 200) {
                    const updatedCartDetails = cartDetails.filter((item) => item.id !== id);
                    setCartDetails(updatedCartDetails);

                    const newTotalAmount = updatedCartDetails.reduce((acc, item) => acc + parseFloat(item.total), 0).toFixed(2);
                    setTotalAmount(newTotalAmount);

                    toast.success(t('cart.deleteSuccess'));
                } else {
                    toast.error(t('cart.deleteFailed'));
                }
            } catch (err) {
                console.log(err);
                toast.error(t('cart.deleteFailed'));
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
                        <h1 className='text-center text-yellow font-main'>{t('cart.cartTitle')}</h1>
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
                                                <p className='font-head text-yellow'>{t('cart.price')}:</p>
                                                <p className='font-head text-yellow'>{item.price} {t('menu.bath')}</p>
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
                                <p className='text-center font-head text-gray-500'>{t('cart.emptyCart')}</p>
                            </div>
                        )}
                    </div>
                    <div className='bg-red-gradient h-16 flex items-center justify-between px-4 text-white'>
                        <button onClick={openCheckout}
                            className={`font-head p-1 rounded-md bg-yellow w-32 hover:scale-105 duration-300 ${cartDetails.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={cartDetails.length === 0} > {t('cart.confirm')} </button>

                        <div className='flex items-center gap-4'>
                            <h1>{t('cart.total')}:</h1>
                            <h1 className='w-32 p-2 rounded-md bg-white text-red font-head text-center'>{totalAmount}</h1>
                            <h1>{t('menu.bath')}</h1>
                        </div>
                    </div>
                </section>
            </div>
            <CartCheckout closeCheckout={closeCheckout} totalAmount={totalAmount} closeOrderCart={onClose} />
        </div>
    );
}
