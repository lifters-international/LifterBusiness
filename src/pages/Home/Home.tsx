import "./index.css";
import Lottie from 'react-lottie-player';

import { Products, Footer, Header } from "../../components";


export const Home = () => {
    return (
        <div className="home">
            <Header />

            <div className="hero-section">
                <div className="button-group">
                    <div className="app-store-badge">
                        <img className="google-logo" src="/google-play-logo.svg" alt="google-play-logo" />
                        <div className="get-it-on">
                            GET IT ON
                        </div>
                        <img className="google-play-text" src="/google-play-text-logo.svg" alt="Google Play" />
                    </div>

                    <div className="app-store-badge">
                        <img className="google-logo" src="/apple-logo.svg" alt="google-play-logo" />
                        <div className="get-it-on">
                            Download on the
                        </div>
                        <img className="google-play-text" src="/apple-logo-text.svg" alt="Google Play" />
                    </div>
                </div>

                <div className="title red">LIFTERS</div>
                <div className="sub-title">HOME FOR ALL THINGS GYM</div>
                <div className="fade-overlay"></div>
                <img className="landing-page-hero-section-man-image" src="/landing-page-hero-section-man-image.png" alt="man-with-dumbell" />
                <div className="doorEffects"></div>
                <img className="hero-section-line-vector" src="/hero-section-line-vector.png" alt="line-vector" />
            </div>

            <div className="wwd-section">
                <div className="image-container">
                    <div className="phone-preview-circle-effect"></div>
                    <img className="wwd-section-image1" src="/wwd-section-image1.png" alt="wwd-section-image1" />
                    <img className="wwd-section-image2" src="/wwd-section-image2.png" alt="wwd-section-image2" />
                </div>

                <div className="wwd-section-text">
                    <div className="title-container">
                        <div className="title">WHAT WE DO</div>
                        <div className="outline">WHAT WE DO</div>
                    </div>

                    <div className="text-block">
                        <div className="paragraph">
                            Lifters is a software company that hopes to bridge the gap between the
                            gym and technology. We are a team of developers and gym enthusiasts who want to
                            make the gym experience more enjoyable and accessible to everyone. To do this we
                            created a platform that allows users to track their progress, find new workouts,
                            and connect with other gym enthusiasts.
                        </div>

                        <div className="paragraph">
                            Not only that but we provide companies with the ability to get their products
                            to the right users. This is done through the use of targeted ads and a platform
                            that allows users to find the right products for them. Lastly we allow companies access to our food api
                            which allows them to create a more personalized experience for their users.
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-products-section">
                <div className="wrapper">
                    <div className="title-container">
                        <div className="title">OUR PRODUCTS</div>
                        <div className="outline">OUR PRODUCTS</div>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <img className="product-banner" src="/lifters-product-banner.png" alt="lifters-product-banner" />

                            <div className="content-box">
                                <div className="wrapper">
                                    <div className="logo-title">
                                        <img src="/icons/logo.png" alt="Logo" className="logo" />
                                        <div className="title">LIFTERS</div>
                                    </div>

                                    <div className="content">
                                        <div className="paragraph">
                                            Our food api allows companies and developers to create
                                            a more personalized experience for their users.
                                        </div>

                                        <a className="explore-button">
                                            <div className="wrapper">
                                                <div className="text">EXPLORE</div>
                                                <div className="arrow">&#8599;</div>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                                <img className="hero-section-line-vector" src="/hero-section-line-vector.png" alt="line-vector" />
                            </div>
                        </div>

                        <div className="card">
                            <div className="content-box">
                                <div className="wrapper">
                                    <div className="logo-title">
                                        <img src="/icons/logo.png" alt="Logo" className="logo" />
                                        <div className="title">FOOD API</div>
                                    </div>

                                    <div className="content">
                                        <div className="paragraph">
                                            Our food api allows companies and developers to create
                                            a more personalized experience for their users.
                                        </div>

                                        <a className="explore-button">
                                            <div className="wrapper">
                                                <div className="text">EXPLORE</div>
                                                <div className="arrow">&#8599;</div>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                                <img className="hero-section-line-vector" src="/hero-section-line-vector.png" alt="line-vector" />
                            </div>
                            <img className="product-banner" src="/food-api-product-banner.png" alt="lifters-product-banner" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
