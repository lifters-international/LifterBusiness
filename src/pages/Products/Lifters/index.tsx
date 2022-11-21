import React from 'react';

import { Header, Footer } from "../../../components";

import { RiFolderChartFill, RiMessage2Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlinePersonSearch } from "react-icons/md";

import "./index.css";

const LiftersProductPage: React.FC = () => {
    return (
        <>
            <Header />

            <div className="LiftersProductContainer">
                <div className="banner" />

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
                                    Access To Our Food Database & Anylytics System
                                </div>
                            </div>

                            <div className="featureBlock-desc">
                                By becoming a member of our Lifters Community, you will have access to our
                                continuesly growing food database. This database will allow you to find food
                                based on searches, calories, macros and more. You will also be able to track your food intake and see how it affects your body,
                                by checking out the micronutrients data.
                            </div>
                        </div>
                    </div>

                    <div className="HorizontalFeaturesContainer">
                        <div className="HorizontalFeatures">
                            <img src="/models/model2.png" alt="feature-model" />

                            <div className="featureBlock">
                                <div className="header">
                                    <HiOutlineUserGroup size={40} className="featureBlock-Icon" />

                                    <div className="featureBlock-text">
                                        Match with other fitness enthusiast
                                    </div>
                                </div>

                                <div className="featureBlock-desc">
                                    You get daily matches for different lifters.
                                    Our algorithm continuesly tries to find the best match for you,
                                    based on your previous matches, past conversations and bio.
                                </div>
                            </div>
                        </div>

                        <div className="HorizontalFeatures">
                            <img src="/models/model3.png" alt="feature-model" />

                            <div className="featureBlock">
                                <div className="header">
                                    <MdOutlinePersonSearch size={40} className="featureBlock-Icon" />

                                    <div className="featureBlock-text">
                                        Searching
                                    </div>
                                </div>

                                <div className="featureBlock-desc">
                                    If you can not find the user you are looking for,
                                    you will be able to search for users using our build search feature
                                    to find the perfect match.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="VerticalFeatures">
                        <img src="/models/model1.png" alt="feature-model" />

                        <div className="featureBlock">
                            <div className="header">
                                <RiMessage2Line size={50} className="featureBlock-Icon" />

                                <div className="featureBlock-text">
                                    Messaging
                                </div>
                            </div>

                            <div className="featureBlock-desc">
                                Once you have matched with a lifter, and they match back with you,
                                you can have endless conversations with them. Feel free to set up new lifting sessions with them
                                to find yourself a new workout partner.
                            </div>
                        </div>
                    </div>

                    <div className="title-container">
                        <div className="title">SUBSCRIPTIONS</div>
                        <div className="outline">SUBSCRIPTIONS</div>
                    </div>

                    <div className="Subs-Containers">
                        <div className="Subs">
                            <div className="sub-header">
                                <div className="wrapper">
                                    <div className="sub-title">
                                        <div>FREE</div>
                                    </div>

                                    <div className="sub-desc">
                                        <div>
                                            Like it says, this subscription is free and will cost you nothing.
                                            It is the default subscription for all of our users.
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="sub-features">
                                <div className="sub-features-desc">
                                    YOU WILL GET ACCESS TO SOME OF OUR FEATURES LIKE:
                                </div>

                                <ul className="sub-features-list">
                                    <li>5 daily matches</li>
                                    <li>Unlimited messaging</li>
                                </ul>
                            </div>

                            <div className="sub-warning-small">
                                This will also mean you will see ads on our site and apps as well.
                            </div>
                        </div>

                        <div className="Subs">
                            <div className="sub-header red">
                                <div className="wrapper">
                                    <div className="sub-title">
                                        <div>PRO</div>
                                        <div className="sub-price">
                                            <div className="sub-price-text">$6.99</div>
                                            <div className="sub-price-month">a month</div>
                                        </div>
                                    </div>

                                    <div className="sub-desc">
                                        <div>
                                            This is the most cost effective subscription.
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="sub-features">
                                <div className="sub-features-desc">
                                    IT PROVIDES YOU WITH ACCESS TO ALL OUR FEATURES, WHICH INCLUDES:   
                                </div>

                                <ul className="sub-features-list">
                                    <li>
                                        Food Database
                                    </li>
                                    
                                    <li>
                                        Analytics
                                    </li>

                                    <li>
                                        15 daily matches
                                    </li>

                                    <li>
                                        Searching
                                    </li>

                                    <li>
                                        Messaging
                                    </li>

                                </ul>
                            </div>

                            <div className="sub-warning-small">
                                But you will also be subject to seeing ads on our website and apps.
                            </div>
                        </div>

                        <div className="Subs">
                            <div className="sub-header red">
                                <div className="wrapper">
                                    <div className="sub-title">
                                        <div>UNLIMITED</div>
                                        <div className="sub-price">
                                            <div className="sub-price-text">$8.99</div>
                                            <div className="sub-price-month">a month</div>
                                        </div>
                                    </div>

                                    <div className="sub-desc">
                                        <div>
                                            This is the most expensive subscription, but it also the most
                                            worth it.
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="sub-features">
                                <div className="sub-features-desc">
                                    IT PROVIDES YOU WITH ACCESS TO ALL OUR FEATURES, WHICH INCLUDES:
                                </div>

                                <ul className="sub-features-list">
                                    <li>
                                        You will get all the features mentioned in the Pro Subscription 
                                        except this time you would not be subject to any ads on our 
                                        website or app.
                                    </li>

                                    <li>
                                        You would also get an unlimited amount of matches a day.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

                <Footer />
            </div>
        </>
    );
}

export default LiftersProductPage;