import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/Resume/Resume";
import Gallery from "./components/gallery/Gallery";
import Showreel from "./components/showreel/Showreel";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/showreel" element={<Showreel />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
