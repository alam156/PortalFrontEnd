import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from './Navbar';
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import axios from "axios";
import NavBar from "./Navbar";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";




const localizer = momentLocalizer(moment);

const SimpleCalendar = () => {
    const [events, setEvents] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/fetch-events`);
            console.log(response.data);
            const events = response.data;
            for (let i = 0; i < events.length; i++) {
                events[i]['title'] = events[i]['eventName'];
                events[i]['start'] = new Date(events[i]['startDate']);
                events[i]['end'] = new Date(events[i]['endDate']);

            }
            setEvents(events);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div className="row justify-content-center">
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>Event Calendar</h2>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '80vh' }}
                        popup
                    />
                </div>

            </div>
            <br/>
            <br/>

            <div className="row justify-content-center">
                <div className="col-md-2">
                    <Link to="/add-event-form" className="btn btn-secondary">
                        Add Event To Calendar
                    </Link>
                </div>

            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};

export default SimpleCalendar;