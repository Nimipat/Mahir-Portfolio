import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Mahir Portfolio</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/showreel">Showreel</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
