import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image1 from '../image/service_image_1.jpeg';
import Image2 from '../image/service_image_2.jpeg';
import Image3 from '../image/service_image_3.jpeg';
import Image4 from '../image/service_image_4.jpeg';

const SigningSteps = () => (
    <Container>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image1}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Registration</h3>
                        <p>
                            Enter your personal information to create an account.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Quick Enroll</h3>
                        <p>
                            Choose the courses you want to enroll in.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={Image2}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>

                </Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image3}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Quick Pair</h3>
                        <p>
                            Generate a key pair to secure your account.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Efficiency</h3>
                        <p>
                            Digital signatures offer a more efficient and convenient way to sign documents compared to traditional wet ink signatures. With digital signatures, there is no need to print out documents, sign them by hand, and then scan or mail them back. Instead, the entire process can be done electronically, saving time and reducing the need for physical storage space. Additionally, digital signatures can be easily integrated into existing workflows and systems, making it easier to manage and track signed documents.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={Image4}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>

                </Row>

            </Col>
        </Row>

    </Container>);
export default SigningSteps;