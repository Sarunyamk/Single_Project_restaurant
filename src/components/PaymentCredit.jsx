import React, { useEffect, useState } from 'react';


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { sendPublishKey, createPaymentStripe } from '../api/payment-api'

import CheckoutFormCredit from "./CheckoutFormCredit";
import { useTranslation } from 'react-i18next';


function PaymentCredit({ amount }) {

    const { t } = useTranslation();


    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const fetchPublishableKey = async () => {
            try {
                const response = await sendPublishKey()
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
                const response = await createPaymentStripe(amount)
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error("Error creating payment intent:", error);
            }
        };

        createPaymentIntent();
    }, []);

    return (
        <>
            <h1 className='text-center'>{t('payment.choose')}</h1>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutFormCredit />
                </Elements>
            )}
        </>
    );
}

export default PaymentCredit;
