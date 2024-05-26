import React, {useCallback, useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from './EventCard';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";
import axios from "axios";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';


/*const events = [
    {
        title: 'Contract Signing Ceremony between BCC CA & ESHAKKHOR LIMITED',
        image: require('./album/event_photo_1.jpg'),
        publishDate: 'Mar 15, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
    },
    {
        title: 'e-Sign Training among the Officers of BCC and CCA',
        image: require('./album/event_photo_2.jpeg'),
        publishDate: 'Mar 16, 2023',
        content: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
    },
    {
        title: 'Signing MoU to Integrate Digital Signatures with e-DP System of DGDP',
        image: require('./album/event_photo_3.jpeg'),
        publishDate: 'Mar 17, 2023',
        content: 'Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim.'
    },
    {
        title: 'Contract Signing Ceremony between BCC CA & ESHAKKHOR LIMITED',
        image: require('./album/event_photo_1.jpg'),
        publishDate: 'Mar 15, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
    },
    {
        title: 'e-Sign Training among the Officers of BCC and CCA',
        image: require('./album/event_photo_2.jpeg'),
        publishDate: 'Mar 16, 2023',
        content: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
    },
    {
        title: 'Signing MoU to Integrate Digital Signatures with e-DP System of DGDP',
        image: require('./album/event_photo_3.jpeg'),
        publishDate: 'Mar 17, 2023',
        content: 'Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim.'
    }
];*/



//const events = [];

const EventGrid = () => {
    const [events, setEvents] = useState([]);
    const isTokenPresent = Cookies.get('token');
    const fetchEvents = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/fetch-event-list`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${isTokenPresent}`
                }
            });

            setEvents(response.data);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }, []);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);
    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div>
                <div>
                    <br/>
                    <br/>
                </div>
                <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center' }}>
                    <h2>Events List</h2>


                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                {isTokenPresent && (
                    <div className="row justify-content-center">
                        <div className="col-md-2">
                            <Link to="/file-upload" className="btn btn-secondary">
                                Add Event
                            </Link>
                        </div>
                    </div>
                )}

                <Container>
                    <Row>
                        {events.map((event, index) => (
                            <Col key={index} md={6} lg={4} className="mb-4">
                                <EventCard event={event} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>


    );
};

export default EventGrid;