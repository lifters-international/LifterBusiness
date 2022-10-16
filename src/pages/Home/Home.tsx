import "./index.css";
import Lottie from 'react-lottie-player';

import LiftersNavBar from "../../assests/LifterNavBar.json";

import { Products, Footer } from "../../components";


export const Home = () => {
    return (
        <div>
            <div className="HomeBanner">
                <div>
                    <Lottie
                        animationData={LiftersNavBar}
                        loop
                        play
                        speed={0.2}
                        className="LiftersContaineLogo App-logo"
                    />
                </div>
                <div className="HeaderBannerTextContainer">
                    <div className="HeaderText HomeBannerText">LIFTERS</div>
                    <div className="HomeBannerText">
                        <h1> #1 </h1>
                        <h1> Home For All Things GYM🔱 </h1>
                    </div>
                </div>
            </div>

            <div className="HomeSection">
                <div className="Header">What We Do</div>
                <div className="WhatWeDo">
                    Lifters is a software company that hopes to bridge the gap between gym and technology.
                    We are a team of developers and gym enthusiasts who want to make the gym experience more enjoyable.
                    To do this we created a platform that allows users to track their progress, find new workouts, and connect with other gym enthusiasts.
                    Not only that but we provide companies with the ability to get their products to the right users.
                    This is done through the use of targeted ads and a platform that allows users to find the right products for them.
                    Lastly we allow companies access to our food api, which allows them to create a more personalized experience for their users.
                </div>
            </div>

            <div className="HomeSection">
                <div className="Header">Our Products</div>

                <div className="ProductsContainer">
                    <Products
                        name="Food API"
                        description="Our food api allows companies and developers to create a more personalized experience for their users."
                        image="/icons/web/image0.png"
                        to="/products/food-api"
                    />

                    <Products
                        name="Lifters"
                        description="Our site/app allows users to track their progress, find new workouts, and connect with other gym enthusiasts."
                        image="https://www.lifters.app/LiftersLogo.png"
                        to="/products/lifters"
                    />

                   {/* <Products
                        name="Lifters Ads"
                        description="Our ads allow companies to get their products to the right users."
                        image="/icons/web/image0.png"
                        to="/products/lifters-ads"
    />*/}
                </div>
            </div>

            <Footer />

        </div>
    );
}
