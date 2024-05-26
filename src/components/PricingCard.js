import React from 'react';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const PricingCard = ({ price, title, features }) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle className="text-primary font-weight-bold">{price}</CardTitle>
                <CardText style = {{background: 'linear-gradient(to right, #96DED1 0%, #9FE2BF 100%'}}><h2>{title}</h2></CardText>
                <ListGroup flush>
                    {features.map((feature, index) => (
                        <ListGroupItem style = {{background: 'linear-gradient(to right, #F0F8FF 0%, #F7FCFE 100%'}} key={index}>
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