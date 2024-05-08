import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import NavBar from "./Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";
import Cookies from "js-cookie";

const AddEventInCalendarForm = () => {
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate();
    const token = Cookies.get('token')

    const handleEventName = (e) => {
        const value = e.target.value;
        setEventName(value);
    }
    const handleStartDate = (e) => {
        setStartDate(e);
    };

    const handleEndDate = (e) => {
        setEndDate(e);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const startDateString = startDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
            const endDateString = endDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
            console.log(startDateString);
            const response = await axios.post(`http://localhost:8085/api/add-event`, {
                eventName,
                startDate,
                endDate
            } ,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });


            console.log(response.data);
            navigate('/calendar');
            // Reset form fields after successful submission
            setEventName('');
            setStartDate(new Date());
            setEndDate(new Date())
        } catch (error) {
            console.error(error);
        }
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
                <h2>Add New Event In Calendar</h2>
            </div>
            <div className="container">
                <div className="container event-container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2 className="mt-4 mb-4">Add Event Form</h2>
                    <br/>
                    <br/>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="eventName" className="form-label">Event Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventName"
                            value={eventName}
                            onChange={handleEventName}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">Start Date</label>
                        <br/>
                        <DatePicker
                            className="form-control"
                            id="startDate"
                            selected={startDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            value={startDate}
                            onChange={handleStartDate}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="endDate" className="form-label">End Date</label>
                        <br/>
                        <DatePicker
                            className="form-control"
                            id="endDate"
                            selected={endDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            value={endDate}
                            onChange={handleEndDate}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary">
                        Add Event
                    </button>
                </form>
            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>


    );
};

export default AddEventInCalendarForm;