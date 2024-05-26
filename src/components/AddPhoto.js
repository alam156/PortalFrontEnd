import React, { useState, useRef, useEffect } from 'react';
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
import Cookies from 'js-cookie';
import "../css/AddPhoto.css";


//import { API_URL } from '../utils/constants';



const AddPhoto = (props) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [caption, setCaption] = useState('');
    const [category, setCategory] = useState('');
    const isTokenPresent = Cookies.get('token');
    /*const [state, setState] = useState({
        title: '',
        content: '',
        publishDate: ''
    });*/
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area

    const [options, setOptions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const token = Cookies.get('token');
            // Fetch data
            const { data } = await axios.get(`http://localhost:8085/api/fetch-category-list`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${isTokenPresent}`
                }
            });
            const results = []
            // Store results in the results array
            data.forEach((value) => {
                results.push({
                    key: value.name,
                    value: value.id,
                });
            });
            // Update the options state
            setOptions([
                {key: 'Select a Category', value: ''},
                ...results
            ])
        }

        // Trigger the fetch
        fetchData();
    }, []);

    const handleCaptionChange = (e) => {
        const value = e.target.value;
        setCaption(value);
    }

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
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
            if (caption.trim() !== '') {
                if (image) {
                    const formData = new FormData();
                    formData.append('image', image);
                    formData.append('caption', caption);
                    formData.append('id',category);
                    console.log(formData);

                    setErrorMsg('');
                    try {
                        const response = await axios.post(
                            'http://localhost:8085/api/upload-photo', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': `Bearer ${token}`
                                }
                            });
                        console.log(response.data);
                    } catch (error) {
                        console.error(error);
                    }
                    //navigate('/events');

                    navigate("/photos");

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
                <h2>Photo Upload Form</h2>
            </div>
            <div className="container">
                <React.Fragment>
                    <Form onSubmit={handleOnSubmit}>
                        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                        <Row>
                            <Col>
                                <Form.Label>Caption</Form.Label>
                                <Form.Group controlId="caption">
                                    <Form.Control
                                        type="text"
                                        name="caption"
                                        value={caption || ''}
                                        placeholder="Enter title"
                                        onChange={handleCaptionChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div>
                            <br/>
                        </div>

                        <Row>
                            <Col>
                                <Form.Label> Select Category</Form.Label>
                                <Form.Group controlId="category">
                                    <Form.Control
                                        as="select"
                                        value = {category || ''}
                                        onChange={handleCategoryChange}
                                    >
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.key}
                                            </option>
                                        ))}
                                    </Form.Control>
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

export default AddPhoto;