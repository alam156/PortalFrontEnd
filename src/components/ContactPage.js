import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import "../css/ContactPage.css"
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

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
                <h2>Contact Page</h2>


            </div>
            <div className="row">
                <div className ="col-md-2">

                </div>
                <div className ="col-md-8">
                    <div>
                        <Container fluid className="p-0">
                            <Row className="no-gutters">
                                <Col md={6} className="bg-info d-flex align-items-center">
                                    <div className="text-center text-white p-5">
                                        <h1 className="display-4 mb-3">Contact Me</h1>
                                        <p className="lead mb-5">I'd love to hear from you! Fill out the form below to get in touch.</p>
                                        <Card className="bg-light border-0">
                                            <Card.Body>
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter your name" required />
                                                    </Form.Group>
                                                    <Form.Group controlId="formEmail">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter your email" required />
                                                    </Form.Group>
                                                    <Form.Group controlId="formMessage">
                                                        <Form.Label>Message</Form.Label>
                                                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                                                    </Form.Group>
                                                    <Button variant="light" type="submit" className="btn-block bg-primary">
                                                        Send Message
                                                    </Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={6} className="p-5">
                                    <h2 className="display-5 mb-4">About Us</h2>
                                    <p className="lead mb-4">We are a web developer with a passion for creating beautiful and functional websites. I specialize in building responsive, user-friendly interfaces using modern web technologies.</p>
                                    <p className="mb-4">When we are not coding, you can find me hiking, reading, or experimenting with new recipes in the kitchen.</p>
                                    <h3 className="mb-4">Skills</h3>
                                    <ul className="list-unstyled">
                                        <li>HTML/CSS</li>
                                        <li>JavaScript/TypeScript</li>
                                        <li>React</li>
                                        <li>Node.js/Express</li>
                                        <li>MongoDB/PostgreSQL</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <BlackFooter/>
                <Chatbox/>
                <Footer/>
            </div>
        </div>
    );
};

export default ContactPage;