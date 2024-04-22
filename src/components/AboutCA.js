import React from 'react';
import '../css/AboutCA.css';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";

const AboutCA = () => {
    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>About CA</h2>
            </div>
            <div className="about-container">
                <div className="about-content">
                    <h1 className="about-title">About QuickSign</h1>
                    <div className="about-divider"></div>
                    <p className="about-text">
                        We are a team of passionate developers and designers who love creating beautiful and functional websites. Our goal is to provide our clients with the best possible user experience and help them achieve their business objectives.
                    </p>
                    <p className="about-text">
                        We specialize in building responsive and scalable web applications using the latest technologies. Our team has extensive experience in a wide range of industries, including e-commerce, healthcare, finance, and education.
                    </p>
                    <p className="about-text">
                        If you're looking for a reliable and experienced web development partner, look no further. Contact us today to learn more about our services and how we can help you grow your business.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://source.unsplash.com/random/1600x900" alt="AboutCA Us" />
                </div>
            </div>
            <BlackFooter />
            <Chatbox/>
            <Footer />
        </div>


    );
};

export default AboutCA;