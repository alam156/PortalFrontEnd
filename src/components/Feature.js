import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/Feature.css";
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import backgroundImage from "./album/event_background.jpeg";
import featureImage from "../components/album/feature_image.jpeg";

const InfiniteGrid = () => {
    const [items, setItems] = useState([]);
    const token = Cookies.get('token')

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/fetch-features`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            //console.log()
            setItems(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <div className="navbar-fixed">
                <NavBar />
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>Feature List</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <Link to="/add-feature-form" className="btn btn-secondary">
                        Add Feature
                    </Link>
                </div>
            </div>
            <Container>
                <div>
                    <br/>
                    <br/>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {items.map((item, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src={featureImage} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>
                                        <h2 className="bg-crystal">{item.title}</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <div
                                            className="bg-elegant"
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                        />

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/*<Row className="add-space">
                    {items.map((item, index) => (
                        <Col key={index} xs={6} md={6}>
                            <div className="grid-item bg-main mb-5 border-bottom border-top-white">
                                <h2 className="bg-crystal">{item.title}</h2>
                                <hr />
                                <div
                                    className="bg-elegant"
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>*/}
            </Container>
            <BlackFooter />
            <Footer />
        </div>
    );
};

export default InfiniteGrid;