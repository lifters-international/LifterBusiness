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
                        <img className="google-play-text" src="/google-play-text-logo.svg" alt="Google Play"/>
                    </div>

                    <div className="app-store-badge">
                        <img className="google-logo" src="/apple-logo.svg" alt="google-play-logo" />
                        <div className="get-it-on">
                            Download on the
                        </div>
                        <img className="google-play-text" src="/apple-logo-text.svg" alt="Google Play"/>
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

            </div>

        </div>
    );
}
