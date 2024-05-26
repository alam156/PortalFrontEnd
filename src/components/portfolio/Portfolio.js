import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar";
import './style.css'
import BlackFooter from "../BlackFooter";
import Footer from "../Footer";
import NavBar from "../Navbar";
import AccordionFAQ from "../AccordionFAQ";
import backgroundImage from "../album/event_background.jpeg";
import SigningSteps from "./components/SigningSteps";
import CarLogos from "../CarLogos";
import {Col, Row} from "reactstrap";
import PricingCard from "../PricingCard";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Portfolio = () => {
    const [landingPageData, setLandingPageData] = useState({});
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
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <div className="navbar-fixed">
                <NavBar />
            </div>
            <Header data={landingPageData['Header']} />
            <Features data={landingPageData['Features']} />
            <About data={landingPageData['About']} />
            <Services data={landingPageData['Services']} />
            {/*<Gallery data={landingPageData['Gallery']} />*/}

            <div>
                <div className="section-title text-center">
                    <h2>QuickSign Video Tutorial</h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="ratio ratio-16x9">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/bhEvK-18PbQ"
                                    title="Make Your Signature Digital with Photoshop | Photoshop Tutorial" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            {/*<iframe src="https://www.youtube.com/embed/zpOULjyy-n8" title="Youtube Video"*/}
                            {/*        allowFullScreen></iframe>*/}
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-title text-center">
                    <h2>QuickSign Signing Steps</h2>
                </div>
                <SigningSteps></SigningSteps>
            </div>
            <div>
                <div className="section-title text-center">
                    <h2>QuickSign App Pricing</h2>
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
            </div>
            <Testimonials data={landingPageData['Testimonials']} />
            <AccordionFAQ data={landingPageData['Faq']}/>
            <div className="section-title text-center">
                <h2>Our Brands</h2>
            </div>
            <CarLogos />
            <BlackFooter/>
            <Footer/>
            {/*<Team data={landingPageData['Team']} />*/}
            {/*<Contact data={landingPageData['Contact']} />*/}
        </div>
    );
};

export default Portfolio;
