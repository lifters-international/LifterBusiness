import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { Header, Loading, Error } from "../../components";
import { useFoodApiLogIn } from "../../hooks";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import "./index.css"

const LoginFoodApiAccount: React.FC = () => {
    const navigate = useNavigate();
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const logInState = useFoodApiLogIn();

    if (logInState.loggedInSuccess) navigate("/food-api");

    if (logInState.loading) return <Loading />

    if (logInState.error.length > 0) return <Error {...logInState.error[0]} reload={true} />

    return (
        <div className="FoodApiAccount">
            <Header />

            <div className="formView">
                <div className="line-outline">
                    <div className="line">Login Now</div>
                    <div className="outline">Login Now</div>
                </div>

                <div className="form">
                    <div className="icon-input">
                        <HiOutlineMail className="account-icon" color="white" />
                        <input type="email" name="email" id="email" placeholder="email" ref={email}/>
                    </div>

                    <div className="icon-input">
                        <RiLockPasswordFill className="account-icon" color="white" />
                        <input type="password" name="password" id="password" placeholder="password" ref={password}/>
                    </div>

                    <div className="buttonsContainer">
                        <button type="button" className="main-button" onClick={ () => {
                            logInState.logIn(email.current!.value, password.current!.value);
                        } }>
                            <div>
                                LOG IN
                            </div>
                            <div>
                                &#8599;
                            </div>
                        </button>

                        <button className="side-button" onClick={() => {
                            navigate("/food-api/createAccount");
                        }} type="button">
                            <div>
                                Don't have an Account?
                            </div>

                            <div className="color-red">
                                Sign up
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginFoodApiAccount;
