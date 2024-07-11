import React from "react";
import "../Resume/resume.css";

const Resume = () => {
    return(
        <div className="resume">
            <h2>Resume</h2>
            <p>Download my resume: <a href="/resume.pdf" download>Downlaod</a>
            </p>        
        </div>
    );
};

export default Resume;