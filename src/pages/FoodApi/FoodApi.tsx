import React from "react";
import { Navigate } from "react-router-dom";

import { Loading, Error } from "../../components";

import { useSessionHandler } from "../../hooks";

import "./index.css";

const FoodApi: React.FC = () => {
    const authentication = useSessionHandler();

    if (authentication.loading) return <Loading />;

    if (authentication.error) {
        if (
            authentication.error[0].message === "jwt malformed"
            || 
            authentication.error[0].extensions.code === "BAD_USER_INPUT"
        ) return <Navigate to="/food-api/createAccount" replace={true} />
        else if (
            authentication.error[0].message === "jwt expired"
            ||
            authentication.error[0].message === "User does not exist."
        ) return <Navigate to="/food-api/logIn" replace={true} />
        else return <Error {...authentication.error[0]} reload={true}/>;
    }

    return (
        <div className="FoodApi">
            heyyy
        </div>
    );
}

export default FoodApi;