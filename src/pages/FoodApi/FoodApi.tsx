import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

import { Loading, Error, Header, Modal } from "../../components";
import { useSessionHandler } from "../../hooks";
import { updateFoodApiAccountEmail, updateFoodApiAccountPassword, getFoodApiAccountInfor, generateNewFoodApiKeys } from "../../graphQlQuieries";
import { fetchGraphQl, FoodApiAccountInfor } from "../../utils";

import "./index.css";

const FoodApi: React.FC = () => {
    const authentication = useSessionHandler();
    const navigate = useNavigate();
    const [showModalChangeEmail, setShowModalChangeEmail] = useState(false);
    const [showModalChangePassword, setShowModalChangePassword] = useState(false);
    const [ accountInfor, setAccountInfor ] = useState<FoodApiAccountInfor | null>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");


    useEffect(() => {
        if ( authentication.token == null) return;

        fetchGraphQl(getFoodApiAccountInfor, { token: authentication.token })
            .then((data) => {
                if (data.errors) {
                    console.log(data.errors);
                    return alert('Problem getting account information');
                }

                setAccountInfor(data.data.getFoodApiAccountInfor);
            });

    }, [ authentication ]);

    const changeEmail = async (newEmail: string, password: string) => {
        const response = await fetchGraphQl(updateFoodApiAccountEmail, { newEmail, password: password, token: authentication.token! });
        if (response.data) {
            setShowModalChangeEmail(false);
            setShowModalChangePassword(false);
            setEmail("");
            setPassword("");
            setNewPassword("");
            alert("Email changed successfully");
        } else if (response.errors) {
            alert("Problem updating your email address, please try again later.");
        }
    }

    const changePassword = async (oldPassword: string, newPassword: string) => {
        const response = await fetchGraphQl(updateFoodApiAccountPassword, { password: oldPassword, newPassword: newPassword, token: authentication.token! });
        if (response.data) {
            setShowModalChangeEmail(false);
            setShowModalChangePassword(false);
            setEmail("");
            setPassword("");
            setNewPassword("");
            alert("Password changed successfully");
        } else if (response.errors) {
            alert("Problem updating your password, please try again later.");
        }
    }

    if ( authentication.loading ) return <Loading />;

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

    if ( accountInfor === null ) return <Loading />;

    return (
        <div className="FoodApi">
            <Header />

            <div className="foodApiContainer">
                <div className="header">
                    <div
                        onClick={
                            () => {
                                fetchGraphQl(generateNewFoodApiKeys, { token: authentication.token! })
                                    .then((data) => {
                                        if (data.errors) {
                                            return alert('Problem generating new keys');
                                        }

                                        navigate(0);
                                    });
                            }
                        }
                    >Generate New Keys</div>

                    <div
                        onClick={() => navigate("/food-api/setup-payment", { replace: false } )}

                    >Add Payment Method</div>

                    <div
                        onClick={() => setShowModalChangeEmail(true)}
                    >Change Email</div>

                    <div
                        onClick={() => setShowModalChangePassword(true)}
                    >Change Password</div>

                    <div onClick={() => {
                        localStorage.removeItem("foodApiAccountToken");
                        navigate("/food-api/logIn");
                    }}>Log Out</div>
                </div>

                <div className="inforContainer">
                    <div className="apiKeys">
                        <div className="title">Api Keys:</div>

                        <div className="keys">
                            <div onClick={ () => navigator.clipboard.writeText(`${accountInfor.api_key}`)}>ApiKey: {accountInfor.api_key}</div>
                            <div onClick={ () => navigator.clipboard.writeText(`${accountInfor.test_api_key}`)}>TestApiKey: {accountInfor.test_api_key}</div>
                        </div>
                    </div>

                    <div className="paymentMethods">
                        <div className="title">Payment Method: {accountInfor.paymentStatement}</div>
                    </div>
                </div>
            </div>

            <Modal canSee={showModalChangeEmail} close={() => { setShowModalChangeEmail(false) }} >
                <div className="ChangeModal">
                    <div className="icon-input">
                        <HiOutlineMail className="account-icon" color="black" />
                        <input type="email" name="NewEmail" placeholder="New Email" onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        } />
                    </div>

                    <div className="icon-input">
                        <RiLockPasswordFill className="account-icon" color="black" />
                        <input type="password" name="Password" placeholder="Password"
                            onChange={
                                (e) => {
                                    setPassword(e.target.value);
                                }
                            }
                        />
                    </div>

                    <button type="button" className="main-button" onClick={() => {
                        changeEmail(email, password);
                    }}>
                        <div>
                            CHANGE EMAIL
                        </div>
                        <div>
                            &#8599;
                        </div>
                    </button>
                </div>
            </Modal>

            <Modal canSee={showModalChangePassword} close={() => { setShowModalChangePassword(false) }} >
                <div className="ChangeModal">
                    <div className="icon-input">
                        <RiLockPasswordFill className="account-icon" color="black" />
                        <input type="password" name="CurrentPassword" placeholder="Current Password"
                            onChange={
                                (e) => {
                                    setPassword(e.target.value);
                                }
                            }
                        />
                    </div>

                    <div className="icon-input">
                        <RiLockPasswordFill className="account-icon" color="black" />
                        <input type="password" name="NewPassword" placeholder="New Password"
                            onChange={
                                (e) => {
                                    setNewPassword(e.target.value);
                                }
                            }
                        />
                    </div>

                    <button type="button" className="main-button" onClick={() => {
                        changePassword(password, newPassword);
                    }}>
                        <div>
                            CHANGE PASSWORD
                        </div>
                        <div>
                            &#8599;
                        </div>
                    </button>
                </div>
            </Modal>


        </div>
    );
}

export default FoodApi;
