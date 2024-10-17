import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutFormCredit from "../Componant/CheckoutFormCredit";

function PaymentCredit() {

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const fetchPublishableKey = async () => {
            try {
                const response = await axios.get("http://localhost:3000/payment/config")
                const { publishableKey } = response.data;
                setStripePromise(loadStripe(publishableKey));
            } catch (error) {
                console.error("Error fetching publishable key:", error);
            }
        };

        fetchPublishableKey();
    }, []);

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await axios.post("http://localhost:3000/payment/create-payment-intent", {
                    amount: 1999,
                });
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error("Error creating payment intent:", error);
            }
        };

        createPaymentIntent();
    }, []);

    return (
        <>
            <h1 className='text-center'>Choose Payment</h1>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutFormCredit />
                </Elements>
            )}
        </>
    );
}

export default PaymentCredit;
