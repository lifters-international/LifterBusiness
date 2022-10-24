import "./index.css";

import { Footer, Header } from "../../components";

export const About = () => {
    return (
        <>
            <Header />

            <div className="about">
                <div className="hero-section">
                    <img src="/about-hero-section.png" alt="About Hero" className="hero-image" />
                    <div className="hero-text">ABOUT US</div>
                    <div className="hero-image-fade-overlay"></div>
                </div>

                <div className="about-section">
                    <img src="/about-section-image.png" alt="About Section" className="about-section-image" />
                    <div className="about-section-text">
                        <div className="about-section-text-heading">
                            <div className="about-section-text-heading-outline">OUR STORY</div>
                            <div className="about-section-text-heading-line">OUR STORY</div>
                        </div>

                        <div className="about-section-text-content">
                            <div>
                                At first Lifters was meant to be a social media site and was going to be called Peers,
                                before it turned into a dating site. Then after some months passed it later turned into a dating site
                                for fitness enthusiast, which is where the "matching" feature came from.
                            </div>

                            <div>
                                The name Lifters was choosen because it was a play on words for the word "Lifters"
                                and "Lifters" is a term used in the fitness community. Soon after the name was changed to "Lifters"
                                and the site was launched, we decided Lifters could be a lot more than just a dating site.
                            </div>

                            <div>
                                We decided to make it a place where people could come to find the best gyms, trainers, and workout plans.
                                Ever since then we have been working hard to make Lifters the best place for all things GYM.
                                Creating, Modifying, and Deploying new features to best fit our fitness community needs.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="our-team-section">
                    <div className="our-team-text-heading">
                        <div className="our-team-text-heading-outline">OUR TEAM</div>
                        <div className="our-team-text-heading-line">OUR TEAM</div>
                    </div>

                    <div className="our-team-text">
                        We are the definition of a small business. Being that at the moment
                        we are just two people and a freelancer, but we are working hard to make Lifters the best
                        place for all things GYM. Which includes the CEO/CTO, CMO, and our on call freelancer.
                        We are all fitness enthusiast and we are all working hard to make Lifters the best place for all things GYM.
                    </div>

                    <div className="our-team-cards">
                        <div className="our-team-card">
                            <img src="/about-section-image.png" alt="About Section" className="our-team-card-image" />
                            <div className="our-team-card-text">
                                <div className="wrapper">
                                    <div className="inside-wrapper">
                                        <div className="our-team-card-text-heading">Chidozie Nnaji</div>
                                        <div className="our-team-card-text-subheading">CEO/CTO</div>
                                    </div>

                                    <div className="our-team-card-text-content">
                                        Chidozie is our fullstack developer, responsible
                                        for all technologies and software used and distributed by Lifters International 
                                        LLC. Lastly he is one of the original founders of Lifters International LLC.
                                        The idea and code was all created by him.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="our-team-card">
                            <img src="/about-section-image.png" alt="About Section" className="our-team-card-image" />
                            <div className="our-team-card-text">
                                <div className="wrapper">
                                    <div className="inside-wrapper">
                                        <div className="our-team-card-text-heading">Chike Nnaji</div>
                                        <div className="our-team-card-text-subheading">CMO</div>
                                    </div>

                                    <div className="our-team-card-text-content">
                                        Chike is the CMO of Lifters. Responsible for all business operations, like 
                                        handling the finances, marketing, and business development. He is also one of the original founders
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="our-team-card">
                            <img src="/anton-UI-picture.jpg" alt="About Section" className="our-team-card-image" />
                            <div className="our-team-card-text">
                                <div className="wrapper">
                                    <div className="inside-wrapper">
                                        <div className="our-team-card-text-heading">Anton Shokaliuk</div>
                                        <div className="our-team-card-text-subheading">CMO</div>
                                    </div>

                                    <div className="our-team-card-text-content">
                                        Anton is our on call freelance UI designer, he is responsible for all the UI/UX design of Lifters.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="our-mission-section">
                        <div className="our-mission-text-heading">
                            <div className="our-mission-text-heading-outline">OUR MISSION</div>
                            <div className="our-mission-text-heading-line">OUR MISSION</div>
                        </div>

                        <div className="our-mission-text">
                            <div className="header">Our mission is to make Lifters the best place for all things GYM.</div>
                            <div className="subheading">
                                We want to make Lifters a aplace where people can come to find the best gyms,
                                trainers, workout plans, gym clothes, products and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};