import React from "react";

import { SocialIcon } from 'react-social-icons';

import "./index.css";

const Footer: React.FC = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterContent">
                <div>
                    <div className="FooterContentHeader">Lifters International</div>
                    <div className="FooterContentTabs">
                        Lifters International is a software company, started by two brothers. 
                        That hopes to serve you and all your gym needs.
                    </div>
                </div>

                <div>
                    <div className="FooterContentHeader">Products</div>
                    <div  className="FooterContentTabs">
                        <a href="/products/lifters">Lifters</a>
                        <a href="/products/food-api">Food API</a>
                        <a href="/products/lifters-ads">Ads</a>
                    </div>
                </div>

                <div>
                    <div className="FooterContentHeader">Useful Links</div>

                    <div className="FooterContentTabs">
                        <a href="/about">About Us</a>      
                        <a href="/events">Events</a>
                        <a href="/announcements">Announcements</a>               
                        <a href="terms-service">Terms of Service</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>

                <div>
                    <div className="FooterContentHeader">Contacts</div>
                    <div className="FooterContentTabs">
                        <a href="/contact">Contact</a>
                        <a href="mailto:admins@lifters.app">admins@lifters.app</a>
                    </div>
                </div>
            </div>

            <div className="FooterSocials">
                <SocialIcon url="https://twitter.com/lifters_llc" fgColor="white" />
                <SocialIcon url="https://www.instagram.com/lifterscommunity/" fgColor="white" />
                <SocialIcon url="https://github.com/lifters-international" fgColor="white" />
            </div>
            <div className="FooterText">Lifters International LLC © 2022</div>
        </div>
    );
}

export default Footer;
