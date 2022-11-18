import React from "react";
import { useLocation } from 'react-router-dom';

import "./index.css"

const Header: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className="Header">
            <div className="Wrapper">
                <a href="/"><img src="/icons/logo.png" alt="Logo" className="logo"/></a>

                <div className="Menu">
                    <a className={`Item Red`} href="https://www.lifters.app" target="_blank" rel="noreferrer noopener">Lifters</a>
                    <a className={`Item Red ${pathname === "/food-api" ? "active" : ""}`} href="/food-api" >Food API</a>
                    {/*<a className={`Item ${pathname === "/ads" ? "active" : ""}`} href="/">ADS</a>*/}
                    <a className={`Item ${pathname === "/about" ? "active" : ""}`} href="/about" >About US</a>
                    <a className={`Item ${pathname === "/contact" ? "active" : ""}`} href="/contact">Contacts</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
