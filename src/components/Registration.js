import React, {useState} from 'react';
import '../css/Registration.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import NavBar from "./Navbar";
import Footer from "./Footer";
import BlackFooter from "./BlackFooter";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";

const Registration = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [nameError, setNameError] = useState('');
    const [designationError, setDesignationError] = useState('');
    const [submitError, setSubmitError] = useState('');
    const navigate = useNavigate();
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (!/^[a-zA-Z\s-]+$/.test(value)) {
            setNameError('Name can only contain letters, hyphens, and spaces.');
        } else {
            setNameError('');
        }
    };

    const handleDesignationChange = (e) => {
        const value = e.target.value;
        setDesignation(value);
        if (!/^[a-zA-Z\s-]+$/.test(value)) {
            setDesignationError('Designation can only contain letters, hyphens, and spaces.');
        } else {
            setDesignationError('');
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nameError || designationError) {
            setSubmitError("name or designation may contain numbers!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8085/api/create-user', {
                name,
                designation,
                organization,
                email
            });

            console.log(response.data);
            navigate('/dashboard');
// Reset form fields after successful submission
            setName('');
            setDesignation('');
            setEmail('');
            setOrganization('');
        } catch (error) {
            setSubmitError("email may be duplicate!");
            console.error(error);
        }
    };

    return (
        <div>
            <div className="navbar-fixed"><NavBar/>
            </div>
            <div className="container">
                <div>
                    <br/>
                    <br/>
                </div>
                <div style={{
                    backgroundImage: `url(${backgroundImage})`, height: '100px', display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2>Registration</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange}
                               required/>
                        {nameError && <span className="error">{nameError}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="designation" className="form-label">Designation:</label>
                        <input type="text" id="designation" className="form-control" value={designation}
                               onChange={handleDesignationChange} required/>
                        {designationError && <span className="error">{designationError}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email ID:</label>
                        <input type="email" id="email" className="form-control" value={email}
                               onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="organization" className="form-label">Organization:</label>
                        <input type="text" id="organization" className="form-control" value={organization}
                               onChange={(e) => setOrganization(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {submitError && <span className="error">{submitError}</span>}
                </form>
            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};
export default Registration;
