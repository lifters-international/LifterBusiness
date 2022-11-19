import React, { useState} from "react";

import { contactUsQuery } from "../graphQlQuieries";
import { fetchGraphQl } from "../utils";

export type ContactState = {
    loading: boolean;
    error: boolean;
    contact: ( name: string, lastName: string, email : string, phoneNumber: string, message: string ) => Promise<void>;
}

export const useContact = (): ContactState => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const contact = async ( name: string, lastName: string, email : string, phoneNumber: string, message: string ) => {
        setLoading(true);
        setError(false);
        
        const res = await fetchGraphQl(contactUsQuery, {
            name,
            lastName,
            email,
            phoneNumber,
            message
        });

        setLoading(false);
        
        if (!res.data) {
            setError(true);
        }

    };

    return {
        loading,
        error,
        contact
    };
}
