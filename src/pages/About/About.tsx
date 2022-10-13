import "./index.css";

import { Footer, NavBar } from "../../components";

export const About = () => {
    return ( 
        <>
            <NavBar />

            <div className="AboutBanner">
                <div className="SloganContainer">
                    <div className="SloganContainerText">
                        <h1> #1 </h1>
                        <h1> Home For All Things GYM🔱 </h1>
                    </div>
                </div>

                <div>
                    <h1>Our Story</h1>
                    <blockquote>
                        At first Lifters was meant to be a social media site and was going to be called Peers, before it turned into a dating site.
                        Then after some months passed it later turned into a dating site for fitness enthusiast, and which is where the "matching" feature came from.
                        The name Lifters was chosen because it was a play on words for the word "Lifters" and "Lifters" is a term used in the fitness community.
                        Soon after the name was changed to "Lifters" and the site was launched, we decided lifters could be alot more than just a dating site.
                        We decided to make it a place where people could come to find the best gyms, trainers, and workout plans.
                        Ever since then we have been working hard to make Lifters the best place for all things GYM🔱. 
                        Creating, Modifying, and Deploying new features to best fit our fitness communities needs.
                    </blockquote>
                </div>

                <div>
                    <h1>Our Team</h1>
                    <blockquote>
                        We are the definition of a small business. Being that at the moment we only have two people on our team.
                        Which includes the CEO, CTO, and CMO. We are all fitness enthusiast and we all have a passion for helping others.
                        Our team members are: 
                        <ul>
                            <li>CEO: <a href="https://www.linkedin.com/in/chidozien/">Chidozie Nnaji</a></li>
                            <li>CTO: <a href="https://www.linkedin.com/in/chidozien/">Chidozie Nnaji</a></li>
                            <li>CMO: <a href="https://www.linkedin.com/in/chidozien/">Chike Nnaji</a></li>
                        </ul>
                    </blockquote>
                </div>
            </div>

            <Footer />
        </>
    );
};