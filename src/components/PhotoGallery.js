import React, { useState } from 'react';
import '../css/PhotoGallery.css';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import Modal from 'react-bootstrap/Modal';
import data from '../jsons/photo_data.json';
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: '8gVv6nxq6gY', width: 1080, height: 800, caption: "Event about something" },
    { id: 'Dhmn6ete6g8', width: 1080, height: 1620, caption: "Event about something 1"},
    { id: 'RkBTPqPEGDo', width: 1080, height: 720, caption: "Event about something 2"},
    { id: 'Yizrl9N_eDA', width: 1080, height: 721, caption: "Event about something 2" },
    { id: 'KG3TyFi0iTU', width: 1080, height: 1620, caption: "Event about something 2" },
    { id: 'Jztmx9yqjBw', width: 1080, height: 607, caption: "Event about something 2" },
    { id: '-heLWtuAN3c', width: 1080, height: 608, caption: "Event about something 2" },
    { id: 'xOigCUcFdA8', width: 1080, height: 720, caption: "Event about something 2" },
    { id: '1azAjl8FTnU', width: 1080, height: 1549, caption: "Event about something 2" },
    { id: 'ALrCdq-ui_Q', width: 1080, height: 720, caption: "Event about something 2" },
    { id: 'twukN12EN7c', width: 1080, height: 694, caption: "Event about something 2" },
    { id: '9UjEyzA6pP4', width: 1080, height: 1620, caption: "Event about something 2" },
    { id: 'sEXGgun3ZiE', width: 1080, height: 720, caption: "Event about something 2" },
    { id: 'S-cdwrx-YuQ', width: 1080, height: 1440, caption: "Event about something 2" },
    { id: 'q-motCAvPBM', width: 1080, height: 1620, caption: "Event about something 2" },
    { id: 'Xn4L310ztMU', width: 1080, height: 810, caption: "Event about something 2" },
    { id: 'iMchCC-3_fE', width: 1080, height: 610, caption: "Event about something 2" },
    { id: 'X48pUOPKf7A', width: 1080, height: 160, caption: "Event about something 2" },
    { id: 'GbLS6YVXj0U', width: 1080, height: 810, caption: "Event about something 2" },
    { id: '9CRd1J1rEOM', width: 1080, height: 720 , caption: "Event about something 2"},
    { id: 'xKhtkhc9HbQ', width: 1080, height: 1440 , caption: "Event about something 2"},
];

const photos = unsplashPhotos.map((photo) => ({
    src: unsplashLink(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: unsplashLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
    caption: photo.caption
}));

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        const selectedPhoto = photos.find((photo) => photo.src === src);
        setSelectedImage(selectedPhoto);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
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
            <div className="container">
                <div className="container album-container">
                    <h2 className="mt-4 mb-4">Photo Album</h2>
                </div>
                <div className="row">
                    {photos.map((photo, index) => (
                        <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                            <div
                                className="img-container"
                                style={{ height: '200px', overflow: 'hidden' }}
                                onClick={() => handleImageClick(photo.src)}
                            >
                                <img
                                    src={photo.src}
                                    srcSet={photo.srcSet.join(', ')}
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
                        <Modal.Title>Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedImage.src}
                            srcSet={selectedImage.srcSet.join(', ')}
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