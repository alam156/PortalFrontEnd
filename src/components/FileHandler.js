import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import "../css/FileHandler.css"
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Chatbox from "./Chatbox";
import Footer from "./Footer";
import backgroundImage from "./album/event_background.jpeg";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

//import { API_URL } from '../utils/constants';



const FileHandler = (props) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [publishDate, setPublishDate] = useState('');
    /*const [state, setState] = useState({
        title: '',
        content: '',
        publishDate: ''
    });*/
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleContentChange = (e) => {
        const value = e.target.value;
        setContent(value);
    }

    const handlePublishDateChange = (e) => {
        const value = e.target.value;
        setPublishDate(value);
    }
    /*const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };*/

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setImage(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = '2px dashed #e9ebeb';
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #000';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #e9ebeb';
        }
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        console.log("submit clicked");
        const token = Cookies.get('token');

        try {
            //const { title, content, publishDate } = state;
            if (title.trim() !== '' && content.trim() !== '' && moment(publishDate).format('YYYY-MM-DD') !== '') {
                if (image) {
                    const formData = new FormData();
                    formData.append('image', image);
                    formData.append('title', title);
                    formData.append('content', content);
                    formData.append('publishDate', moment(publishDate).format('YYYY-MM-DD'));
                    console.log(title);

                    setErrorMsg('');
                    try {
                        const response = await axios.post(
                            'http://localhost:8085/api/upload-event', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': `Bearer ${token}`
                                }
                            });
                        console.log(response.data);
                    } catch (error) {
                        console.error(error);
                    }
                    navigate('/events');

                    //navigate("/events");

                    props.history.push('/list');
                } else {
                    setErrorMsg('Please select a file to add.');
                }
            } else {
                setErrorMsg('Please enter all the field values.');
            }
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
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
                <h2>Event Upload Form</h2>
            </div>
            <div className="container">
                <React.Fragment>
                    <Form onSubmit={handleOnSubmit}>
                        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                        <Row>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Group controlId="title">
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={title || ''}
                                        placeholder="Enter title"
                                        onChange={handleTitleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Group controlId="content">
                                    <Form.Control
                                        type="text"
                                        name="content"
                                        value={content || ''}
                                        placeholder="Enter description"
                                        onChange={handleContentChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Publish Date</Form.Label>
                                <Form.Group controlId="publishDate">
                                    <Form.Control
                                        type="date"
                                        name="publishDate"
                                        value={publishDate || ''}
                                        onChange={handlePublishDateChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div>
                            <br/>
                        </div>
                        <div className="upload-section">
                            <Dropzone
                                onDrop={onDrop}
                                onDragEnter={() => updateBorder('over')}
                                onDragLeave={() => updateBorder('leave')}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                        <input {...getInputProps()} />
                                        <p>Drag and drop a file OR click here to select a file</p>
                                        {image && (
                                            <div>
                                                <strong>Selected file:</strong> {image.name}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Dropzone>
                            {previewSrc ? (
                                isPreviewAvailable ? (
                                    <div className="image-preview">
                                        <img className="preview-image" src={previewSrc} alt="Preview" />
                                    </div>
                                ) : (
                                    <div className="preview-message">
                                        <p>No preview available for this file</p>
                                    </div>
                                )
                            ) : (
                                <div className="preview-message">
                                    <p>Image preview will be shown here after selection</p>
                                </div>
                            )}
                        </div>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </React.Fragment>
            </div>

            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};

export default FileHandler;