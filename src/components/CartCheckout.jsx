

import React, { useState } from 'react';

import useAppStore from '../stores/appStore';
import PaymentCredit from './PaymentCredit';
import useCartStore from '../stores/cartStore';

export default function CartCheckout({ totalAmount, closeCheckout, closeOrderCart }) {

    const user = useAppStore((state) => state.user);
    const [isShowQrCode, setIsShowQrCode] = useState(false);
    const isCheckoutOpen = useCartStore((state) => state.isCheckoutOpen);

    const cartDetails = useCartStore((state) => state.cartDetails);

    const hdlShowQrCode = () => {
        setIsShowQrCode(!isShowQrCode);
    };

    return (
        <div>
            {isCheckoutOpen && (
                <div onClick={closeCheckout} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
                        <h2 className='text-center font-main text-yellow mb-4'>Your Order</h2>
                        <div className='flex flex-col gap-4 text-yellow'>
                            <p className='text-lg font-bold '>Customer name: <span className='text-black'>{user.user.firstname}</span></p>
                            <p className='text-lg font-bold'>Address: <span className='text-black'>{user.user.address}</span></p>
                            <hr />
                            <div style={{ maxHeight: '100px', overflowY: 'auto' }} className='flex flex-col gap-4 text-yellow'>
                                {cartDetails.map((item) => (
                                    <div key={item.id} className='flex justify-between text-black'>
                                        <span>{item.item.menuName}</span>
                                        <span>{item.count} x {item.price} THB</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-between mt-4 font-bold text-yellow'>
                            <span>Total:</span>
                            <span className='text-black'>{totalAmount} THB</span>
                        </div>
                        {!isShowQrCode ? (
                            <button onClick={hdlShowQrCode}
                                className="mt-6 w-full bg-red-800 text-white p-2 rounded-lg hover-bg-yellow duration-300">
                                Payment                              </button>
                        ) : (
                            <PaymentCredit amount={totalAmount} customerId={user.user.id} closeCheckout={closeCheckout} closeOrderCart={closeOrderCart} />
                        )}
                        <button onClick={closeCheckout} className='mt-6 w-full bg-red-gradient text-white p-2 rounded-lg '>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
