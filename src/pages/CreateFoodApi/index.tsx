import React from "react";

import "./index.css"

const CreateFoodApiAccount: React.FC = () => {
    return (
        <div className="CreateFoodApiAccount">
            <h1>Create A Food Api Account</h1>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            <button type="button">
                Create Account
            </button>

            <div>
                <p>Already have an account?</p>
            </div>
        </div>
    );
}

export default CreateFoodApiAccount;
