import React from 'react';
import Lottie from 'react-lottie-player';

import LiftersNavBar from "../../assests/LifterNavBar.json";

import { Header, Footer } from "../../components";

import "./index.css";

const FoodApiProductPage: React.FC = () => {
    return (
        <>
            <Header />

            <div className="Product-Container">
                <img
                    src="/icons/web/image0.png"
                    alt="food-api-product-logo"
                />

                <div className="Product-Container-title">
                    <a href="/food-api" target="_blank" rel="noreferrer noopener">Lifters Food API</a>
                </div>

                <div className="Product-Container-DESC">
                    <div className="Product-Container-description">
                        Lifters Food API is platform that allows developers and business to access a established food database. Allowing them to query our continuesly growing lists of foods.
                    </div>

                    <div className="Product-Container-description">
                        <div className="Product-Container-description-title">Features</div>
                        <ul>
                            <li>
                                Query food database - You allowed to query different foods in our database, using our published api modules. Written in different programming languages for ease of use.
                            </li>

                            <li>
                                Well documentated API - We understand the importance of documentation, so we made sure to document our api modules, so you can easily use them.
                            </li>

                            <li>
                                Easy to use - Our api modules are easy to use, and you can easily integrate them into your projects.
                            </li>

                        </ul>
                    </div>

                    <div className="Product-Container-description">
                        <div className="Product-Container-description-title">Subscriptions</div>
                        <ul>
                            <li>
                                Free - You can use our api modules for free, but you are limited to 10 queries per day.
                            </li>

                            <li>
                                Hobby - You can use our api modules for $10 a month, but are limited to 100 queries per day.
                            </li>

                            <li>
                                Pro - You can use our api modules for $50 a month, but you are limited to 10,000 queries per day.
                            </li>

                            <li>
                                Enterprise - You can use our api modules for $100 a month, but you are limited to 100,000 queries per day.
                            </li>
                        </ul>
                    </div>

                    <div className="Product-Container-description">
                        <div className="Product-Container-description-title">API Modules</div>
                        <ul>
                            <li>
                                <a href="">Python</a> 
                            </li>

                            <li>
                                <a href="">NodeJS</a>
                            </li>

                            <li>
                                <a href="">JavaScript</a>
                            </li>

                            <li>
                                <a href="">ReactJS</a>
                            </li>
                        </ul>
                    </div>

                    <div className="Product-Container-description">
                        <div className="Product-Container-description-title">Technologies</div>

                        <ul>
                            <li>ReactJS</li>

                            <li>Typescript</li>

                            <li>Node</li>

                            <li>Express</li>

                            <li>Railway</li>

                            <li>MySQL</li>

                            <li>GraphQL</li>

                            <li>Socket.io</li>

                            <li>React Native</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default FoodApiProductPage;
