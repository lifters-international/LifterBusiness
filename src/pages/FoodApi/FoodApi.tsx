import React from "react";
import Lottie from 'react-lottie-player'
import notFound from "../404/404.json";
import "../404/404.css";

const FoodApi: React.FC = () => {
    return (
        <>
            <div className="Frame404"> 
                <Lottie
                    animationData={notFound}
                    loop
                    speed={2.5}
                    play
                    className="lottie"
                />
            </div>
            <div className="div404">Sorry documentation for the food API is not yet available.</div>
        </>
    );
}

export default FoodApi;