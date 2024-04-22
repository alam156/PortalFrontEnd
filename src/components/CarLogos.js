import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import carLogos from '../jsons/carLogos.json';
import icon1 from './album/media_icon_1.jpeg';
import icon2 from './album/media_icon_2.jpeg';
import icon3 from './album/media_icon_3.jpeg';
import icon4 from './album/media_icon_4.jpeg';
import icon5 from './album/media_icon_5.jpeg';




const CarLogos = () => {

    return (
        <Container className="car-logos">
            <Row className="justify-content-center">
                <Col xs={4} className="logo-column">
                    <img src={icon1} alt={carLogos[0].alt} className="logo" />
                </Col>
                <Col xs={4} className="logo-column">
                    <img src={icon2} alt={carLogos[1].alt} className="logo" />
                </Col>
                <Col xs={4} className="logo-column">
                    <img src={icon3} alt={carLogos[2].alt} className="logo" />
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col xs={6} className="logo-column">
                    <img src={icon4} alt={carLogos[3].alt} className="logo" />
                </Col>
                <Col xs={6} className="logo-column">
                    <img src={icon5} alt={carLogos[4].alt} className="logo" />
                </Col>
            </Row>
        </Container>
    );
};

export default CarLogos;