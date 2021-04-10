import React from 'react';

import { Card, Button } from 'react-bootstrap';
import {connect} from 'react-redux';

import { removeItem } from '../../redux/Order/order.actions';
import {setTrigger } from '../../redux/trigger/trigger.actions';


const OrderMenuItems = (props) => {

    const {name, price, menu_item_type, image, id} = props.item;

    const removeItemFromOrder = (e) => {
        e.preventDefault();

        props.removeItem(id);
        props.setTrigger();
    }

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{`${price} $`}</Card.Text>
              <Card.Text>{menu_item_type}</Card.Text>
              <Button variant="danger" onClick={removeItemFromOrder}>Remove Item</Button>
            </Card.Body>
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: value => dispatch(removeItem(value)),
    setTrigger: () => dispatch(setTrigger()),
});

export default connect(null, mapDispatchToProps)(OrderMenuItems);