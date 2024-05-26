import React, {useCallback, useEffect, useState} from 'react';
import '../css/PhotoGallery.css';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import Modal from 'react-bootstrap/Modal';
import data from '../jsons/photo_data.json';
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";
import axios from "axios";
import {Button, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [categories, setCategories] = useState([]);
    const isTokenPresent = Cookies.get('token');

    const fetchImages = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/fetch-photo-list`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${isTokenPresent}`
                }
            });
            const samples = response.data;
            console.log(response.data);
            let photos = [];
            for (let i = 0; i < samples.length; i++) {
                const photo = {
                    image: `http://127.0.0.1:8080/${samples[i]['image']}`,
                    caption: samples[i]['caption'],
                    id: samples[i]['id']
                };
                photos.push(photo);
            }
            setPhotos(photos);
            for(let i=0; i<samples.length; i++) {
                console.log(photos[i]['image']);

            }
            //console.log(response.data);

        } catch (error) {
            console.error(error);
        } finally {
        }
    }, [isTokenPresent]);

    const fetchCategories = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/fetch-category-list`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${isTokenPresent}`
                }
            });
            setCategories(response.data);
            console.log(response.data);

        } catch (error) {
            console.error(error);
        } finally {
        }
    }, [isTokenPresent]);

    useEffect(() => {
        // Trigger the fetch
        fetchCategories();
        fetchImages();
    }, [fetchCategories, fetchImages]);

    const handleImageClick = (src) => {
        const selectedPhoto = photos.find((photo) => photo.image === src);
        setSelectedImage(selectedPhoto);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    const handleButtonClick = async (categoryId) => {
        try {
            const response = await axios.get(`http://localhost:8085/api/categories/${categoryId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${isTokenPresent}`
                }
            });

            const samples = response.data['photos'];
            let images = [];
            for (let i = 0; i < samples.length; i++) {
                const image = {
                    image: `http://127.0.0.1:8080/${samples[i]['image']}`,
                    caption: samples[i]['caption'],
                    id: samples[i]['id']
                };
                images.push(image);
            }
            setPhotos(images);
            for(let i=0; i<samples.length; i++) {
                console.log(photos[i]['image']);

            }
            // Do something with the category data
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
                <h2>Photo Gallery</h2>
            </div>
            {isTokenPresent && (
                <div className="row justify-content-center">
                    <div className="col-md-2">
                        <Link to="/upload-photo" className="btn btn-secondary">
                            Add Photo
                        </Link>
                    </div>
                </div>
            )}
            <div>
                <br/>
                <br/>
            </div>
            <div className="container">
                <div className="container album-container">
                    <h2 className="mt-4 mb-4">Photo Album</h2>
                </div>
                <Row>
                    {Array.from({ length: Math.ceil(categories.length / 6) }, (_, i) => i)
                        .map((index) => (
                            <Row key={index} className="mb-3">
                                {categories.slice(index * 6, (index + 1) * 6).map((category) => (
                                    <Col key={category.id} xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Button variant="secondary" className="m-1" onClick={() => handleButtonClick(category.id)}>
                                            {category.name}
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        ))}
                </Row>
                <div className="row">
                            {photos.map((photo, index) => (
                                <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                                    <div
                                        className="img-container"
                                        style={{ height: '200px', overflow: 'hidden' }}
                                        onClick={() => handleImageClick(photo.image)}
                                    >
                                        <img
                                            src={photo.image}
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div className="container description-container">
                                        <p>{photo.caption}</p>
                                    </div>
                                </div>
                            ))}

                </div>
            </div>
            {selectedImage && (
                <Modal show={true} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedImage.caption}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedImage.image}
                            //srcSet={selectedImage.srcSet.join(', ')}
                            alt=""
                            className="img-fluid"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            )}

            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};

export default PhotoGallery;