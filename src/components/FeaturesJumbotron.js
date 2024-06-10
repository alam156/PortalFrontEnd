import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faAward, faMobileAlt, faSquare, faBaseball, faCloudSun, faSearch, faBasketball, faBarcode} from '@fortawesome/free-solid-svg-icons';

const FeaturesJumbotron = () => (
    <Row>
        <Col md={1}>

        </Col>
        <Col md={10}>
            <div className="jumbotron">
                {/*<h1>Features</h1>
                <p>Our product has the following features:</p>*/}
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faCube} size="3x" className="text-primary mb-3" />
                        <h3>Customizable</h3>
                        <p>Our product is highly customizable to meet your specific needs.</p>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faAward} size="3x" className="text-primary mb-3" />
                        <h3>Cloud-based</h3>
                        <p>Our product is cloud-based, which means you can access it from anywhere.</p>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-primary mb-3" />
                        <h3>Mobile-friendly</h3>
                        <p>Our product is mobile-friendly, which means you can use it on any device.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faSquare} size="3x" className="text-primary mb-3" />
                        <h3>Secured</h3>
                        <p>Our product is highly Secured to meet security.</p>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faBaseball} size="3x" className="text-primary mb-3" />
                        <h3>Non-Repudiation</h3>
                        <p>Our product is non-repudiative.</p>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faCloudSun} size="3x" className="text-primary mb-3" />
                        <h3>Optimized</h3>
                        <p>Our product is more optimized.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faSearch} size="3x" className="text-primary mb-3" />
                        <h3>2FA</h3>
                        <p>Our product follows two factor authentication.</p>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faBarcode} size="3x" className="text-primary mb-3" />
                        <h3>e-KYC</h3>
                        <p>We follow eKYC based face recognition while registering.</p>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faBasketball} size="3x" className="text-primary mb-3" />
                        <h3>Economical</h3>
                        <p>The cost of signing is more economical.</p>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col md={1}>

        </Col>
    </Row>

);

export default FeaturesJumbotron;