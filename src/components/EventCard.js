import React from 'react';
import { Card, Image, CardTitle, CardText, Button, Modal } from 'react-bootstrap';

const EventCard = ({ event }) => {
    const { title, image, publishDate, content } = event;
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const truncatedContent = content.length > 200 ? content.substring(0, 200) + '...' : content;
    //const truncatedContent = content;

    const src = `http://127.0.0.1:8080/${image}`;

    return (
        <Card className="mb-4 ">
            <Card.Body>
                <div className="text-center">
                    <Image src={src} onClick={handleShowModal} className="img-fluid mb-3" />
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="text-muted">{publishDate}</Card.Subtitle>
                <Card.Text>{truncatedContent}</Card.Text>
                {content.length > 200 && (
                    <Button variant="link" className="text-primary">
                        Read More
                    </Button>
                )}
            </Card.Body>

            <Modal show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="image-modal-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="image-modal-title">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={src} alt={title} className="img-fluid" />
                </Modal.Body>
            </Modal>
        </Card>
    );
};

export default EventCard;