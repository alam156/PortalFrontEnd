import React from 'react';
import { Row, Col } from 'reactstrap';
import PricingCard from './PricingCard';
import "../css/PricingPage.css";
import NavBar from "./Navbar";
import backgroundImage from "./album/event_background.jpeg";
import BlackFooter from "./BlackFooter";
import Chatbox from "./Chatbox";
import Footer from "./Footer";

const PricingPage = () => {
    const plans = [
        {
            price: 'Free',
            title: 'Class 0',
            features: [
                'IDENTIFICATION',
                'EMAIL',
                'ENCRYPTION',
                'CODE SIGNING',
                'SSL SERVER AUTHENTICATION',
                'SSL CLIENT AUTHENTICATION'
            ],
        },
        {
            price: 'BDT 500.00 - BDT 2,000.00/year',
            title: 'Class 1',
            features: [
                'IDENTIFICATION',
                'EMAIL'
            ],
        },
        {
            price: 'BDT 500.00 - BDT 3,000.00/year',
            title: 'Class 2',
            features: [
                'IDENTIFICATION',
                'EMAIL',
                'SSL CLIENT AUTHENTICATION'
            ],
        },
        {
            price: 'BDT 3,000.00 - BDT 25,000.00/year',
            title: 'Class 3',
            features: [
                'IDENTIFICATION',
                'EMAIL',
                'ENCRYPTION',
                'CODE SIGNING',
                'SSL SERVER AUTHENTICATION',
                'SSL CLIENT AUTHENTICATION'
            ],
        }
    ];

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
                <h2>Pricing Page</h2>
            </div>
            <div className="container mt-5">
                <Row>
                    {plans.map((plan, index) => (
                        <Col sm="3" key={index}>
                            <PricingCard {...plan} />
                        </Col>
                    ))}
                </Row>
            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};

export default PricingPage;