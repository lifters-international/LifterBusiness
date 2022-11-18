import React from 'react';
import { Header, Footer } from "../../../components";

import { RiFolderChartFill } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaThumbsUp, FaPython } from "react-icons/fa";

import "./index.css";

const FoodApiProductPage: React.FC = () => {
    return (
        <>
            <Header />

            <div className="FoodAPIContainer">
                <div className="product-banner-background">
                    <div
                        className="img"
                    />

                    <div className="product-banner-red-door" />

                    <div className="fade-overlay" />
                </div>

                <div className="title-container">
                    <div className="title">FEATURES</div>
                    <div className="outline">FEATURES</div>
                </div>

                <div className="features">
                    <div className="VerticalFeatures">
                        <img src="/models/model1.png" alt="feature-model" />

                        <div className="featureBlock">
                            <div className="header">
                                <RiFolderChartFill size={50} className="featureBlock-Icon" />

                                <div className="featureBlock-text">
                                    Query Food Database
                                </div>
                            </div>

                            <div className="featureBlock-desc">
                                You are allowed to query different foods in our database, using our published
                                api modules. Written in different programming languages for ease of use.
                            </div>
                        </div>
                    </div>

                    <div className="HorizontalFeaturesContainer">
                        <div className="HorizontalFeatures">
                            <img src="/models/model2.png" alt="feature-model" />

                            <div className="featureBlock">
                                <div className="header">
                                    <HiOutlineDocumentText size={40} className="featureBlock-Icon" />

                                    <div className="featureBlock-text">
                                        Well documented API
                                    </div>
                                </div>

                                <div className="featureBlock-desc">
                                    We understand the importance of documentation. So we made sure to document our
                                    api modules, so you can easily use them.
                                </div>
                            </div>
                        </div>

                        <div className="HorizontalFeatures">
                            <img src="/models/model3.png" alt="feature-model" />

                            <div className="featureBlock">
                                <div className="header">
                                    <FaThumbsUp size={40} className="featureBlock-Icon" />

                                    <div className="featureBlock-text">
                                        Easy to use
                                    </div>
                                </div>

                                <div className="featureBlock-desc">
                                    Our api modules are easy to use, and you can easily integrate them into
                                    your projects.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-container">
                    <div className="title">SUBSCRIPTION</div>
                    <div className="outline">SUBSCRIPTION</div>
                </div>

                <div className="Subs-Containers">

                    <div className="Subs">
                        <div className="sub-header red">
                            <div className="wrapper">
                                <div className="sub-title">
                                    <div>UNLIMITED</div>
                                    <div className="sub-price">
                                        <div className="sub-price-text">$0.01</div>
                                        <div className="sub-price-month">a month per request</div>
                                    </div>
                                </div>

                                <div className="sub-desc">
                                    
                                </div>
                            </div>
                        </div>


                        <div className="sub-features">

                            <ul className="sub-features-list">
                                <li>
                                    All API modules are available to you.
                                </li>

                                <li>
                                    Scale accordingly, and you would not have to worry about being over charged.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="title-container">
                    <div className="title">API MODULES</div>
                    <div className="outline">API MODULES</div>
                </div>

                <div className="api-modules">
                    <div className="api-module">
                        <FaPython size={60} className="featureBlock-Icon" />
                        <div>PYTHON</div>
                    </div>

                    <div className="api-module">
                        <FaPython size={60} className="featureBlock-Icon" />
                        <div>PYTHON</div>
                    </div>

                    <div className="api-module">
                        <FaPython size={60} className="featureBlock-Icon" />
                        <div>PYTHON</div>
                    </div>

                    <div className="api-module">
                        <FaPython size={60} className="featureBlock-Icon" />
                        <div>PYTHON</div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default FoodApiProductPage;
