import React from 'react';
import { Card } from 'react-bootstrap';
import {CardDeck} from "reactstrap";

const PieBox = () => {
    const data = [
        {
            icon: 'fa-solid fa-globe',
            title: 'Global Reach',
            description: 'Our platform has a global reach, allowing you to connect with customers from all over the world.',
            color: '#00BCD4',
        },
        {
            icon: 'fa-solid fa-mobile-screen',
            title: 'Mobile-Friendly',
            description: 'Our platform is fully responsive and mobile-friendly, ensuring that your customers can access your content on any device.',
            color: '#FFC107',
        },
        {
            icon: 'fa-solid fa-lock',
            title: 'Secure',
            description: 'Our platform uses the latest security measures to ensure that your data is safe and secure.',
            color: '#00BCD4',
        },
        {
            icon: 'fa-solid fa-user-friends',
            title: 'Community-Driven',
            description: 'Our platform is community-driven, allowing you to connect with other users and share your experiences.',
            color: '#FFC107',
        },
    ];

    return (
        <div>
            <div className="pie-box">
                <CardDeck>
                    {data.map((item, index) => (
                        <Card key={index} className="pie-card" style={{ backgroundColor: item.color }}>
                            <Card.Body>
                                <i className={`fas ${item.icon} fa-3x`}></i>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>


            </div>
        </div>

    );
};

export default PieBox;