import React from 'react';

import {Card, Button} from 'react-bootstrap';

import {connect} from 'react-redux';

import {addItem} from '../../redux/Order/order.actions';

const OrderItem = (props) => {
    const {name, price, menu_item_type, image, id} = props.orderItem;

    const addItemToOrder = (e) => {
        props.addItem(props.orderItem)
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{`${price} $`}</Card.Text>
              <Card.Text>{menu_item_type}</Card.Text>
              <Button variant="success" onClick={addItemToOrder}>Add to Order</Button>
            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value)),
});

export default connect(null, mapDispatchToProps)(OrderItem);