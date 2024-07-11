// src/components/showreel/Showreel.js
import React from "react";
import "../showreel/showreel.css";
import showreelVideo from "../../assets/videos/Video 1.mp4";

const Showreel = () => {
    return (
        <div className="showreel">
            <h2>Showreel</h2>
            <video controls>
                <source src={showreelVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Showreel;
