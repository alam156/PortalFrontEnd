import React from 'react';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const PricingCard = ({ price, title, features }) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle className="text-primary font-weight-bold">{price}</CardTitle>
                <CardText className="bg-info"><h2>{title}</h2></CardText>
                <ListGroup flush>
                    {features.map((feature, index) => (
                        <ListGroupItem key={index}>
                            <i className="fas fa-check mr-2"></i>
                            {feature}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </CardBody>
        </Card>
    );
};

export default PricingCard;