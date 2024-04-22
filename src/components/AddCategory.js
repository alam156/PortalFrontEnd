import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import NavBar from "./Navbar";
import backgroundImage from "./album/event_background.jpeg";
import BlackFooter from "./BlackFooter";
import Chatbox from "./Chatbox";
import Footer from "./Footer";

const AddCategory = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [submitError, setSubmitError] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (!/^[a-zA-Z\s-]+$/.test(value)) {
            setNameError('Name can only contain letters, hyphens, and spaces.');
        } else {
            setNameError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nameError) {
            setSubmitError("name may contain numbers!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8085/api/add-category', {
                name
            });

            console.log(response.data);
// Reset form fields after successful submission
            setName('');
        } catch (error) {
            setSubmitError("name error!");
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
                    <button type="submit" className="btn btn-secondary">Submit</button>
                    {submitError && <span className="error">{submitError}</span>}
                </form>
            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};
export default AddCategory;