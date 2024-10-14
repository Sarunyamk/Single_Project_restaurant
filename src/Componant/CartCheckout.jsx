import React, { useState } from 'react';
import useAppStore from '../zustand/appStore';
import Swal from 'sweetalert2';
import { createPayment } from '../api/payment-api'
import axios from 'axios';

import qrcode from '../img/imgBg/99492.jpg';

export default function CartCheckout({ cartDetails, totalAmount, isCheckoutOpen, closeCheckout, closeOrderCart }) {
    const user = useAppStore((state) => state.user);
    const [isShowQrCode, setIsShowQrCode] = useState(false);

    const hdlShowQrCode = () => {
        setIsShowQrCode(!isShowQrCode);
    };

    const hdlConfirmPayment = async (customerId) => {
        try {
            // เรียก API เพื่อยืนยันการชำระเงินในเบื้องต้น
            const response = await createPayment(customerId)

            // แสดงข้อความยืนยันว่าการชำระเงินสำเร็จ
            Swal.fire({
                title: 'Payment Confirmed!',
                text: 'Your payment has been successfully confirmed.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(async () => {
                // ปิด modal ทั้งหมด
                closeCheckout(); // ปิด modal ของ Checkout
                closeOrderCart(); // ปิด modal ของ OrderCustomerCart
            });
        } catch (error) {
            console.error('Error confirming payment:', error);
        }
    };

    return (
        <div>
            {isCheckoutOpen && (
                <div onClick={closeCheckout} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
                        <h2 className='text-center font-main text-yellow mb-4'>สรุปคำสั่งซื้อ</h2>
                        <div className='flex flex-col gap-4 text-yellow'>
                            <p className='text-lg font-bold '>ชื่อลูกค้า: <span className='text-black'>{user.user.firstname}</span></p>
                            <p className='text-lg font-bold'>ที่อยู่จัดส่ง: <span className='text-black'>{user.user.address}</span></p>
                            <hr />
                            <div style={{ maxHeight: '100px', overflowY: 'auto' }} className='flex flex-col gap-4 text-yellow'>
                                {cartDetails.map((item) => (
                                    <div key={item.id} className='flex justify-between text-black'>
                                        <span>{item.item.menuName}</span>
                                        <span>{item.count} x {item.price} บาท</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-between mt-4 font-bold text-yellow'>
                            <span>ยอดรวม:</span>
                            <span className='text-black'>{totalAmount} บาท</span>
                        </div>
                        {!isShowQrCode ? (
                            <button onClick={hdlShowQrCode}
                                className="mt-6 w-full bg-red-800 text-white p-2 rounded-lg hover-bg-yellow duration-300">
                                Payment
                            </button>
                        ) : (
                            <button onClick={() => hdlConfirmPayment(user.user.id)} // ส่ง customerId
                                className="mt-6 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 duration-300">
                                Confirm Payment
                            </button>
                        )}
                        <button onClick={closeCheckout} className='mt-6 w-full bg-red-gradient text-white p-2 rounded-lg '>Close</button>
                        {isShowQrCode && (
                            <div>
                                <img src={qrcode} className='w-40 my-5 mx-auto' alt="QR Code" />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
