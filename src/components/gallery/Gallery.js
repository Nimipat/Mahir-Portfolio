// src/components/gallery/Gallery.js
import React from "react";
import "../gallery/gallery.css";
import photo1 from "../../assets/images/Mahir1.jpg";
import photo2 from "../../assets/images/Mahir 2.jpg";
// import photo3 from "../../assets/images/photo3.jpg";
// Add more photos as needed

const Gallery = () => {
    const images = [photo1, photo2]; // Add more images to the array

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} alt={`Gallery item ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
