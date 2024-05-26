import React from 'react';
import {useState, useEffect} from "react";
import {Button, Spinner} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';
import NavBar from '../components/Navbar.js';
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";
import BlackFooter from "./BlackFooter";
import GridItems from "./GridItems";
import BannerPage from "./BannerPage";
import CarLogos from "./CarLogos";
import Jumbotron from "./Jumbotron";
import Chatbox from "./Chatbox";
import backgroundImage from "./album/event_background.jpeg";
import Steps from "./Steps";

const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="navbar-fixed">
                <NavBar />
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>HomePage</h2>
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div className="container">
                <div className='row mb-5'>
                    <HomeCarousel />
                </div>
                <div className="container grid-container">
                    <h2 className="mt-4 mb-4">Why Customer choose us?</h2>
                </div>
                <div className='row mb-5'>
                    <GridItems />
                </div>
                <div>
                    <BannerPage
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-10.5l-1.5-1.5L10 14.5l3.5-3.5 1.5 1.5z"/></svg>}
                        title="Trusted Everywhere"
                        text="Traditionally our customers have been from the highly-regulated industries, who need high-trust, legal certainty and an on-premise solution. These are now joined by many thousands of smaller organisations who are benefiting from our SigningHub cloud service.

No matter cloud or on-premise, we are committed to delivering the latest e-signature technology and a great support service to all our customers.

"
                    />
                </div>
                <div className="container grid-container justify-content-center text-center">
                    <h2 className="mt-4 mb-4" style={{ opacity: 0.8, color: 'green' }}>Steps</h2>
                </div>
                <div className='row mb-5 blue-background'>
                    <Steps/>
                </div>
                <div className='row mb-5'>
                    <Jumbotron/>
                </div>
                <div className="container grid-container">
                    <h2 className="mt-4 mb-4">Our Brands</h2>
                </div>
                <div className = 'row mb-5'>
                    <CarLogos />
                </div>



            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>
    );
};
export default LandingPage;