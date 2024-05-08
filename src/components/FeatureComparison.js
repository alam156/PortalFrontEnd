import React from 'react';
import '../css/FeatureComparison.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import featureImage from './feature-comparison-background.png';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ComparisonTable from '../components/ComparisonTable'
import BlackFooter from "./BlackFooter";
import PieBox from "./PieBox";
import PieChart from "./PieChart";
import {Container, ListGroup, ListGroupItem} from "react-bootstrap";

function FeatureComparisonPage() {
    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div className="page">
                <div className="header">
                    <img src={featureImage} alt="Background" className="bg-img" />
                    <div className="title-container">
                        <h1 className="title">Feature Comparison!</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="justify-content-center">
                            <ComparisonTable/>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="justify-content-center">
                            <PieBox></PieBox>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>

                <div>
                    <br/>
                    <br/>

                </div>

                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <Container>
                            <h2>Frequently Asked Questions</h2>
                            <ListGroup>
                                <ListGroupItem>
                                    <h5>How does your platform work?</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5>Can I use your platform on my mobile device?</h5>
                                    <p>Yes, our platform is fully responsive and mobile-friendly.</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5>Is your platform secure?</h5>
                                    <p>Yes, our platform uses the latest security measures to ensure that your data is safe and secure.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Container>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>



                {/*<div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <div className="justify-content-center">
                            <PieChart></PieChart>
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>*/}

                {/*<div >
                    <ComparisonTable/>

                </div>*/}
            </div>
            <BlackFooter/>
            <Footer/>
        </div>


    );
}

export default FeatureComparisonPage;