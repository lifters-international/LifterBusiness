import React from "react";

import "./index.css"

const LoginFoodApiAccount: React.FC = () => {
    return (
        <div className="CreateFoodApiAccount">
            <h1>Login To Your Food Api Account</h1>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            <button type="button">
                Log In
            </button>

            <div>
                <p>Don't have an account?</p>
            </div>
        </div>
    );
}

export default LoginFoodApiAccount;
