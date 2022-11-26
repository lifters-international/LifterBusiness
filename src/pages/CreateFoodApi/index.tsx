import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { Header, Loading, Error } from "../../components";
import { useSignUp } from '../../hooks';

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import "./index.css"

const CreateFoodApiAccount: React.FC = () => {
    const navigate = useNavigate();
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const signUp = useSignUp();

    if ( signUp.loading ) return <Loading />

    if ( signUp.signUpSuccessful ) navigate("/food-api/logIn");

    if ( signUp.error.length > 0 ) return <Error {...signUp.error[0]} reload={true} />

    return (
        <div className="FoodApiAccount">
            <Header />

            <div className="formView">
                <div className="line-outline">
                    <div className="line">Create Account</div>
                    <div className="outline">Create Account</div>
                </div>

                <div className="form">
                    <div className="icon-input">
                        <HiOutlineMail className="account-icon" color="white" />
                        <input type="email" name="email" id="email" placeholder="email" ref={email} />
                    </div>

                    <div className="icon-input">
                        <RiLockPasswordFill className="account-icon" color="white" />
                        <input type="password" name="password" id="password" placeholder="password" ref={password} />
                    </div>

                    <div className="buttonsContainer">
                        <button type="button" className="main-button" onClick={ () => {
                            signUp.signUp( email.current?.value || "", password.current?.value || "");
                        }}>
                            <div>
                                CREATE ACCOUNT
                            </div>
                            <div>
                                &#8599;
                            </div>
                        </button>

                        <button className="side-button" onClick={() => {
                            navigate("/food-api/logIn");
                        }} type="button">
                            <div>
                                Already have an Account?
                            </div>

                            <div className="color-red">
                                Login
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateFoodApiAccount;
