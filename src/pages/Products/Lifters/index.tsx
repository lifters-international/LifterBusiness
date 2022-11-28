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

                </div>

                <Footer />
            </div>
        </>
    );
}

export default LiftersProductPage;