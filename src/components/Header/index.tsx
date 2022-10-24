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
                    <a className={`Item Red ${pathname === "/" ? "active" : ""}`} href="/">Lifters</a>
                    <a className={`Item Red ${pathname === "/food-api" ? "active" : ""}`} href="/" >Food API</a>
                    <a className={`Item ${pathname === "/ads" ? "active" : ""}`} href="/">ADS</a>
                    <a className={`Item ${pathname === "/about" ? "active" : ""}`} href="/about" >About US</a>
                    <a className={`Item ${pathname === "/contact" ? "active" : ""}`} href="/">Contacts</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
