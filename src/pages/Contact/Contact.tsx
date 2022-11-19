import "./index.css";

import React, { useState } from "react";

import { BiUser } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"

import { Header, Footer } from "../../components";

import { useContact } from "../../hooks";

export const Contact = () => {
    const { contact, loading, error } = useContact();

    const [{ name, lastName, email, phoneNumber, message }, setState ] = useState({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    if ( loading ) return <div>Loading...</div>;

    if ( error ) alert("There was a issue sending your message. Please try again later.");

    const handleSubmit = async () => {
        if (
            name.length <= 0 ||
            name === "" ||
            lastName.length <= 0 ||
            lastName === "" ||
            email.length <= 0 ||
            email === "" ||
            phoneNumber.length <= 0 ||
            phoneNumber === "" ||
            message.length <= 0 ||
            message === ""
        ) {
            alert("Please fill out all fields.");
            return;
        }

        await contact(
            name,
            lastName,
            email,
            phoneNumber,
            message
        );

        if (!error) {
            alert("Message sent! We will get back to you as soon as possible.");
        }
        
    }

    return (
        <div className="contact-page">
            <Header />

            <div className="contact-form">
                <div className="wrapper">
                    <div className="container form-text-container">
                        <div className="header-outline">GET IN TOUCH</div>
                        <div className="header-line">GET IN TOUCH</div>

                        <div className="text">
                            If you have any questions, comments, or concerns, please
                            feel free to contact us. Please fill out the form and we will 
                            get back to you as soon as possible.
                        </div>
                    </div>

                    <div className="container form">
                        <div className="input-container">
                            <BiUser className="icon" />
                            <input type="text" placeholder="First Name" value={name} onChange={(event) => setState(prev => ({ ...prev, name: event.target.value}) ) }/>
                        </div>
                        

                        <div className="input-container">
                            <BiUser className="icon" />
                            <input type="text" placeholder="Last Name" value={lastName} onChange={(event) => setState(prev => ({ ...prev, lastName: event.target.value}) )}/>
                        </div>

                        <div className="input-container">
                            <AiOutlineMail className="icon" />
                            <input type="email" placeholder="Email" value={email} onChange={(event) => setState(prev => ({ ...prev, email: event.target.value}) )}/>
                        </div>

                        <div className="input-container">
                            <textarea placeholder="Message" value={message} onChange={(event) => setState(prev => ({...prev, message: event.target.value}) )} />
                        </div>


                        <button onClick={handleSubmit}>
                            <div>
                                SUBMIT
                            </div>
                            <div>
                                &#8599;
                            </div>
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}