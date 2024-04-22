import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import BlackFooter from './BlackFooter';
import Footer from './Footer';
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";

const AddFeatureForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleFeatureTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8085/api/add-feature', {
                title,
                content
            });

            console.log(response.data);
            navigate('/features');
            // Reset form fields after successful submission
            setTitle('');
            setContent('');
        } catch (error) {
            console.error(error);
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image'
    ];

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
                <h2>About New Feature</h2>
            </div>
            <div className="container">
                <div className="container event-container">
                    <br />
                    <br />
                    <br />
                    <h2 className="mt-4 mb-4">Add Feature Form</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="eventName" className="form-label">
                            Feature Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="featureTitle"
                            value={title}
                            onChange={handleFeatureTitleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="eventName" className="form-label">
                            Feature Content
                        </label>
                        <ReactQuill
                            value={content}
                            onChange={handleContentChange}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary">
                        Add Feature
                    </button>
                </form>
            </div>
            <BlackFooter />
            <Chatbox/>
            <Footer />
        </div>
    );
};

export default AddFeatureForm;