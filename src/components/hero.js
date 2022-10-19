import React from "react";
import "./hero.css"; 

import travel02 from "../assets/travel02.jpg"


const Hero = () => {
    return (
    <div className="hero">
        <img src={travel02} alt="travel" className="hero__image" />
        <h1 className="hero__title">Travel made simple.</h1>
    </div>
    );
};

export default Hero;