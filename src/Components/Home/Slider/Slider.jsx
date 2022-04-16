import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import image1 from '../../../image/slider/1.jpg';
import image2 from '../../../image/slider/2.jpg';
import image3 from '../../../image/slider/3.jpg';

const Slider = () => {
    return (
        <Carousel className="container">
            <Carousel.Item interval={2000}>
                <img className="d-block w-100 image" src={image1} alt="First slide" />
                <Carousel.Caption className="slider-containt main-page">
                    <div className="mb-0">
                        <h2 style={{ maxWidth: "600px", fontSize: "80px", fontFamily: "Montserrat", lineHeight: "1.2" }}>We Create diff Websites</h2>
                        <p style={{ maxWidth: "600px", fontFamily: 'Poppins', color: "#999", fontSize: "18px" }}>Competently reintermediate user friendly scenarios after global synergy. Globally build compelling niche markets rather than bricks-and-clicks alignments. Continually revolutionize interactive strategic theme.</p>
                    </div>                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100 image" src={image3} alt="First slide" />
                <Carousel.Caption className="slider-containt main-page">
                <div className="mb-0">
                        <h2 style={{ maxWidth: "600px", fontSize: "80px", fontFamily: "Montserrat", lineHeight: "1.2" }}>We Create diff Websites</h2>
                        <p style={{ maxWidth: "600px", fontFamily: 'Poppins', color: "#999", fontSize: "18px" }}>Competently reintermediate user friendly scenarios after global synergy. Globally build compelling niche markets rather than bricks-and-clicks alignments. Continually revolutionize interactive strategic theme.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100 image" src={image2} alt="First slide" />
                <Carousel.Caption className="slider-containt main-page">
                <div className="mb-0">
                        <h2 style={{ maxWidth: "600px", fontSize: "80px", fontFamily: "Montserrat", lineHeight: "1.2" }}>We Create diff Websites</h2>
                        <p style={{ maxWidth: "600px", fontFamily: 'Poppins', color: "#999", fontSize: "18px" }}>Competently reintermediate user friendly scenarios after global synergy. Globally build compelling niche markets rather than bricks-and-clicks alignments. Continually revolutionize interactive strategic theme.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
};

export default Slider;