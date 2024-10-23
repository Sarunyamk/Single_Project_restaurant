import React, { useState } from 'react';
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import useAppStore from '../stores/appStore';

export default function CheckoutFormCredit() {

    const user = useAppStore((state) => state.user);
    const elements = useElements();


    const stripe = useStripe();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (!stripe || !elements) {
                // Stripe.js ยังโหลดไม่เสร็จ ห้าม submit จนกว่า Stripe.js จะพร้อม
                return;
            }


            setIsProcessing(true);

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // ทำการเปลี่ยนไปยังหน้าสำเร็จหลังจากยืนยันการชำระเงินสำเร็จ
                    return_url: `${window.location.origin}/Completion`,
                },

            });

            if (error) {

                if (error.type === "card_error" || error.type === "validation_error") {
                    setMessage(error.message);
                } else {
                    setMessage("An unexpected error occurred.");
                }
            }

            setIsProcessing(false);
        } catch (error) {
            console.error('Error confirming payment:', error);
            setMessage('Payment confirmation failed.');
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button className=' w-full bg-green-500 mx-auto py-2 mt-2 rounded-lg font-head text-white'
                disabled={isProcessing || !stripe || !elements} id="submit">
                <span id="button-text " >
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </button>

            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}

