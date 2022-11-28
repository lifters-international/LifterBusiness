import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Header } from "../../components";

const stripePromise = loadStripe('pk_test_51LtTPwB5yAwp5CklgSjB8qC6v2jYZxgp6oTAa31tjutMjqiFQHWNyiEYpSGi2Bgl4LanXzyBECRvqA3poS60yHGv00eXzqq6t9');

const FoodApiSetUpPaymentComplete: React.FC = () => {
    const stripe = useStripe();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!stripe) return;

        const clientSecret = new URLSearchParams(window.location.search).get("setup_intent_client_secret");

        stripe.retrieveSetupIntent(clientSecret as string).then(({ setupIntent }) => {

            if (setupIntent!.status === "succeeded") {
                setMessage("Your payment method has been set up successfully.");
            } else {
                setMessage("There was a problem setting up your payment method.");
            }
        })
    }, [stripe]);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <>
            <Header />
            <Elements stripe={stripePromise}>
                <FoodApiSetUpPaymentComplete />
            </Elements>
        </>
    )
};
