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

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Portfolio = () => {
    const [landingPageData, setLandingPageData] = useState({});
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
            <Testimonials data={landingPageData['Testimonials']} />
            <BlackFooter/>
            <Footer/>
            {/*<Team data={landingPageData['Team']} />*/}
            {/*<Contact data={landingPageData['Contact']} />*/}
        </div>
    );
};

export default Portfolio;
