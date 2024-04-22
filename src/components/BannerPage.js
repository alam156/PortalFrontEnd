import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/BannerPage.css';

const BannerPage = ({ icon, title, text }) => {
    return (
        <Row className="icon-text">
            <Col xs={2} className="icon-column">
                {icon}
            </Col>
            <Col xs={10} className="text-column">
                <h3>{title}</h3>
                <p>{text}</p>
            </Col>
        </Row>
    );
};

export default BannerPage;