import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImage from './quicksign.png';

const Footer = () => {
    return (
        <footer className=" bg-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={logoImage} class="img-fluid" alt="Responsive image" />
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Terms of Service</a></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#"><FaFacebook /></a></li>
                            <li className="list-inline-item"><a href="#"><FaYoutube /></a></li>
                            <li className="list-inline-item"><a href="#"><FaInstagram /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <span>&copy; 2021 Your Company Name</span>
        </footer>
    );
};

export default Footer;