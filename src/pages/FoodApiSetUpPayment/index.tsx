import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Loading, Error, Header } from "../../components";
import { useSessionHandler } from "../../hooks";
import { getFoodApiSetUpIntentClientSecret } from "../../graphQlQuieries";
import { fetchGraphQl } from "../../utils";

import "./index.css"
import SubmitPaymentComponent from './SubmitPayment';

const stripePromise = loadStripe('pk_test_51LtTPwB5yAwp5CklgSjB8qC6v2jYZxgp6oTAa31tjutMjqiFQHWNyiEYpSGi2Bgl4LanXzyBECRvqA3poS60yHGv00eXzqq6t9');

const FoodApiSetUpPayments: React.FC = () => {
    const authentication = useSessionHandler();
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (authentication.token == null) return;

        let setUp = async () => {
            const response = await fetchGraphQl(getFoodApiSetUpIntentClientSecret, { token: authentication.token! });
            if (response.data) setClientSecret(response.data.getFoodApiSetUpIntentClientSeceret as string);
            else if (response.errors) {
                alert("Problem getting your client secret, please try again later.");
                navigate("/food-api", { replace: true });
            }
        }

        setUp();

    }, [authentication]);

    if (authentication.loading || clientSecret.length === 0) return <Loading />;

    if (authentication.error) {
        if (
            authentication.error[0].message === "jwt malformed"
            ||
            authentication.error[0].extensions.code === "BAD_USER_INPUT"
        ) return <Navigate to="/food-api/createAccount" replace={true} />
        else if (
            authentication.error[0].message === "jwt expired"
            ||
            authentication.error[0].message === "FoodApiUser does not exist."
        ) return <Navigate to="/food-api/logIn" replace={true} />
        else return <Error {...authentication.error[0]} reload={true} />;
    }

    if ( error.length > 0 ) return <Error message={error} reload={true} />

    const options = {
        clientSecret,
        appearance: {
            theme: 'night' as any,
        }
    }

    return (
        <div className="FiidApiSetUpPayments">
            <Header />
            <Elements stripe={stripePromise} options={options}>
                <SubmitPaymentComponent setError={setError}/>
            </Elements>
        </div>
    );
};


export default FoodApiSetUpPayments;
