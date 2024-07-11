// src/components/home/Home.js
import React from "react";
import "../home/home.css";
import portfolioImage from "../../assets/images/Mahir1.jpg";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Professional Actor</p>
            <img src={portfolioImage} alt="profile" className="profile-image" />
        </div>
    );
};

export default Home;
