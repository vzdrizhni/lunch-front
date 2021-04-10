import React from 'react';

import { Card, Button } from 'react-bootstrap';

const OrderMenuItems = (props) => {

    const {name, price, menu_item_type, image} = props.item;

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{`${price} $`}</Card.Text>
              <Card.Text>{menu_item_type}</Card.Text>
              <Button variant="success">Add to Menu</Button>
            </Card.Body>
        </Card>
    )
};

export default OrderMenuItems