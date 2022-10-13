import React from 'react';
import Lottie from 'react-lottie-player';

import LiftersNavBar from "../../assests/LifterNavBar.json";

import { NavBar, Footer } from "../../components";

import "./index.css";

const LiftersProductPage: React.FC = () => {
    return (
        <>
            <NavBar />

            <div className="Product-Container">
                <Lottie
                    animationData={LiftersNavBar}
                    loop
                    play
                    speed={0.2}
                    className="LiftersContaineLogo App-logo Product-Container-image"
                />

                <div className="Product-Container-title">
                    <a href="https://www.lifters.app" target="_blank" rel="noreferrer noopener">Lifters</a>
                </div>

                <div>
                    <div className="Product-Container-description">
                        Lifters is a platform for all fitness enthusiasts, allowing them to find new workouts, match with other fitness enthusiast and eventually find a workout partner.
                    </div>

                    <div className="Product-Container-description">
                        <div className="Product-Container-description-title">Features</div>
                        <ul>
                            <li>
                                Access To Our Food Database & Anylytics System - By becoming a member of our Lifters Community, you will have access to our continuesly growing food database.
                                This database will allow you find food based on searchs, calories, macros and more.
                                You will also be able to track your food intake and see how it affects your body, by checking out the micronutrients data.
                            </li>

                            <li>
                                Match with other fitness enthusiast - You get daily matches for different lifters. Our algorithm continuesly tries to find the best match for you, based on your previous matches, past conversations and bio.
                            </li>

                            <li>
                                Searching - If you can not find the user you are looking for, you will be able to search for users, using our built search feature to find the perfect match.
                            </li>

                            <li>
                                Messaging - Once you have matched with a lifter, and they match back with you, you can have endless conversations with them.
                                Feel free to set up new lifting sessions with them to yourself a new workout partner.
                            </li>
                        </ul>
                    </div>

                    <div className="Product-Container-description">
                        <div className="Product-Container-description-title">Subscriptions</div>
                        <ul>
                            <li>
                                Free - Like it says, this subscription is free and will cost you nothing.
                                It is the default subscription for all our users. You will get access to some of our features like: 5 daily matches, and unlimited messaging.
                                This will also mean you will see ads on our site and apps as well.
                            </li>

                            <li>
                                Pro - This is the most cost effective subscription costing $10.99 a month, it provides you with access to all our features, which includes Food Database,
                                Anylytics, 15 daily matches, searching, and messaging. But you will also be subject to seeing ads on our website and apps.
                            </li>

                            <li>
                                Unlimited - This is the most expensive subscription, but it is also the most worth it.
                                You will get all the features mentioned in the Pro Subscription except
                                this time you would not be subject to any ads on our website or app. You would also get an unlimited amount of matches a day.
                                This subscription costs $12.99 a month.
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

                            <li>Expo</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default LiftersProductPage;