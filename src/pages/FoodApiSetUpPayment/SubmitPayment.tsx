import React from 'react';

import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export type Props = {
    setError: React.Dispatch<React.SetStateAction<string>>
}

const SubmitPaymentComponent: React.FC<Props> = ({ setError }) => {
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = async ( event : any ) => {
        if ( !stripe || !elements ) return;

        const { error: errStatement } = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/food-api/setup-payment-complete"
            }
        });

        if ( errStatement ) {
            setError(errStatement.message as string);
        }
    }

    return (
        <div>
            <PaymentElement />
            <button type="button" className="submitPayment" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SubmitPaymentComponent;
