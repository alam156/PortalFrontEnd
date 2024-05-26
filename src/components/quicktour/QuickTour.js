import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Services from "./Services";
import MapLocation from "./MapLocation";
import ExclusiveServices from "./ExclusiveServices";
import Navbar from "../Navbar";
import backgroundImage from "../album/blue-background.png";
import Footer from "../Footer";
import BlackFooter from "../BlackFooter";
import NavBar from "../Navbar";
const QuickTour = () => {
    return (
        <div>
            <div className="navbar-fixed">
                <NavBar />
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div style={{
                backgroundImage: `url(${backgroundImage})`, height: '40px', display: 'flex', opacity: '0.5',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h4>Services</h4>
            </div>
            <br/>
            <Services/>

            <div style={{
                backgroundImage: `url(${backgroundImage})`, height: '40px', display: 'flex', opacity: '0.5',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h4>Map Location</h4>
            </div>
            <br/>
            <MapLocation/>
            <div style={{
                backgroundImage: `url(${backgroundImage})`, height: '40px', display: 'flex', opacity: '0.5',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h4>Exclusive Features</h4>
            </div>
            <br/>
            <ExclusiveServices/>
            <br/>
            <BlackFooter/>
            <Footer/>
        </div>

    )
}
export default QuickTour;