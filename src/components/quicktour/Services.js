import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faAmbulance, faComputer, faComputerMouse, faCannabis, faHatCowboy,faCoffee, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import '../../css/quicktour/Services.css';

const Services = () => (
    <div style={{ background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)' }}>
        <Container>
            <Row>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faCog} style={{color: 'white'}}/>
                        <h3>eKYC service</h3>
                        <p>We provide an app which will perform face recognition using eKYC.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faAmbulance} style={{color: 'white'}}/>
                        <h3>Native Client</h3>
                        <p>We provide native client for Windows and MAC OS.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faCannabis} style={{color: 'white'}}/>
                        <h3>PDF and XML signer</h3>
                        <p>We have a signer app which will generate hash.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faHatCowboy} style={{color: 'white'}}/>
                        <h3>Portal</h3>
                        <p>We have a QuickSign Portal, where you will get all information.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faComputer} style={{color: 'white'}}/>
                        <h3>SigningHub</h3>
                        <p>We have a web application to perform signing from Web.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faComputerMouse} style={{color: 'white'}}/>
                        <h3>Key Pair Generation</h3>
                        <p>We have key pair generation service.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faCoffee} style={{color: 'white'}}/>
                        <h3>Certificate Installation</h3>
                        <p>We provide Certificate installation service.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="service-box">
                        <FontAwesomeIcon icon = {faUmbrellaBeach} style={{color: 'white'}}/>
                        <h3>Certificate Archive</h3>
                        <p>We maintain a certificate archive. All generated certificate stored here.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Services;