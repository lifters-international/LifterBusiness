import "./index.css";

import React, { useState } from "react";

import { NavBar, Footer } from "../../components";

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
        <>
            <NavBar />

            <div className="ContactForm">
                <div className="ContactFormText">
                    <h1> Contact Form </h1>
                    <blockquote>
                        If you have any questions, comments, or concerns, please feel free to contact us.
                        Please fill out the form below and we will get back to you as soon as possible.
                    </blockquote>
                </div>

                <div className="ContactFormContainer">
                    <div className="ContactFormContainerInput">
                        <label> First Name </label>
                        <input type="text" placeholder="First Name" value={name} onChange={(event) => setState(prev => ({ ...prev, name: event.target.value}) ) }/>
                    </div>

                    <div className="ContactFormContainerInput">
                        <label> Last Name </label>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={(event) => setState(prev => ({ ...prev, lastName: event.target.value}) )}/>
                    </div>

                    <div className="ContactFormContainerInput">
                        <label> Email </label>
                        <input type="email" placeholder="Email" value={email} onChange={(event) => setState(prev => ({ ...prev, email: event.target.value}) )}/>
                    </div>

                    <div className="ContactFormContainerInput">
                        <label> Phone Number </label>
                        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setState(prev => ({ ...prev, phoneNumber: event.target.value}) )}/>
                    </div>

                </div>

                <div className="ContactFormContainerInput">
                    <label> Message </label>
                    <textarea placeholder="Message" value={message} onChange={(event) => setState(prev => ({...prev, message: event.target.value}) )} />
                </div>

                <button type="button" onClick={handleSubmit}> Submit </button>
            </div>

            <Footer />
        </>
    )
}