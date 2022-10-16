import React from 'react';
import { Link } from "react-router-dom";

import "./index.css"

const NavBar: React.FC = () => {
    return (
        <div className="NavBar">
            <Link className="NavBar-image" to="/">
                <img src="/icons/web/image1.png" alt="logo" />
            </Link>

            <div className="NavBar-content">
                <Link className="NavBar-content-title" to="/contact">Contact</Link>
                <Link className="NavBar-content-title" to="/about">About</Link>
                <Link className="NavBar-content-title" to="/food-api">API</Link>
                {/*<Link className="NavBar-content-title" to="/ads">Ads</Link>*/}
            </div>
        </div>
    );
}

export default NavBar;