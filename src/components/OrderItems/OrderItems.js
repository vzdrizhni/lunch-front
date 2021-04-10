import React from 'react';

import {Card, Button} from 'react-bootstrap';

import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/Order/order.actions';
import {filterMenu} from '../../redux/menu/menu.actions';

const OrderItem = (props) => {
    const {name, price, menu_item_type, image, id} = props.orderItem;

    const addItemToOrder = (e) => {
        props.addItemToCart(props.orderItem);
        props.filterMenu(props.orderItem);
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

const mapStateToProps = state => ({ trigger: state.trigger,  menu: state.menu});

const mapDispatchToProps = dispatch => ({
    addItemToCart: value => dispatch(addItemToCart(value)),
    filterMenu: value => dispatch(filterMenu(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);