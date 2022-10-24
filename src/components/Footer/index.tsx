import React from "react";

import { SocialIcon } from 'react-social-icons';

import "./index.css";

const Footer: React.FC = () => {
    return (
        <div className="FooterContainer">
            <div className="info">
                <img src="/icons/logo.png" alt="Logo" className="logo" />
                <div className="title">LIFTERS INTERNATIONAL</div>
                <div className="paragraph">
                    Lifters International is a software company, started by
                    brothers. That hopes to serve you and all your gym needs.
                </div>
            </div>

            <div className="columns">

                <div className="column">
                    <div className="title">Products</div>
                    <div className="menu">
                        <a>Lifters</a>
                        <a>Food API</a>
                    </div>
                </div>

                <div className="column">
                    <div className="title">Useful Links</div>
                    <div className="menu">
                        <a href="/about">About US</a>
                        <a>Terms of Service</a>
                        <a>Privacy Policy</a>
                    </div>
                </div>

                <div className="column">
                    <div className="title">Get in touch</div>
                    <div className="menu">
                        <a>Contacts</a>
                    </div>
                </div>

                <div className="column">
                    <div className="title">Follow us</div>
                    <div className="menu">
                        <div className="FooterSocials">
                            <SocialIcon url="https://twitter.com/lifters_llc" fgColor="white" bgColor="transparent" />
                            <SocialIcon url="https://www.instagram.com/lifterscommunity/" fgColor="white" bgColor="transparent" />
                            <SocialIcon url="https://github.com/lifters-international" fgColor="white" bgColor="transparent" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="copyright">Lifters International LLC &copy; 2022</div>

            <div className="button-group">
                <div className="app-store-badge">
                    <img className="google-logo" src="/google-play-logo.svg" alt="google-play-logo" />
                    <div className="get-it-on">
                        GET IT ON
                    </div>
                    <img className="google-play-text" src="/google-play-text-logo.svg" alt="Google Play" />
                </div>

                <div className="app-store-badge">
                    <img className="google-logo" src="/apple-logo.svg" alt="google-play-logo" />
                    <div className="get-it-on">
                        Download on the
                    </div>
                    <img className="google-play-text" src="/apple-logo-text.svg" alt="Google Play" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
