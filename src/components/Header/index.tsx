import React from "react";

import "./index.css"

const Header: React.FC = () => {
    return (
        <div className="Header">
            <div className="Wrapper">
                <img src="/icons/logo.png" alt="Logo" className="logo"/>

                <div className="Menu">
                    <a className="Item Red" href="/">Lifters</a>
                    <a className="Item Red" href="/" >Food API</a>
                    <a className="Item" href="/">ADS</a>
                    <a className="Item" href="/" >About US</a>
                    <a className="Item" href="/">Contacts</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
