import React from 'react';
import '../css/FeatureComparison.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import featureImage from './feature-comparison-background.png';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ComparisonTable from '../components/ComparisonTable'
import BlackFooter from "./BlackFooter";

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
                <div >
                    <ComparisonTable/>

                </div>
                <div >
                    <ComparisonTable/>

                </div>
            </div>
            <BlackFooter/>
            <Footer/>
        </div>


    );
}

export default FeatureComparisonPage;