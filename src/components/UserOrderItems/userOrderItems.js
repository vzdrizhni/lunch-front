import { Card, ListGroup, Button } from 'react-bootstrap';

import {connect} from 'react-redux';

import {setTrigger} from '../../redux/trigger/trigger.actions';

import './userOrderItems.css';

const UserOrderItem = (props) => {

    let menuItems = {};

    menuItems.menu_items = [...props.mealItems];

    const removeItem = (param) => (e) => {
        menuItems.menu_items = menuItems.menu_items.filter(item => item.id !== param);

        fetch('https://frozen-spire-70160.herokuapp.com/orders/'+props.id, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(menuItems)
        })
        .then(response => response.json())
        .then(() => {
            props.setTrigger();
        })
        .catch(err => console.log(err))
    }

    const deleteOrder = () => {
        fetch('https://frozen-spire-70160.herokuapp.com/orders/'+props.id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(() => {
            props.setTrigger();
        })
        .catch(err => console.log(err))
    }

    return(
        <Card style={{ width: '18rem' }} className="order-card">
            <Card.Header><span>Date: {props.name}</span></Card.Header>
            <ListGroup variant="flush" >
              {props.mealItems.map(item => {
                return <ListGroup.Item key={item.id}>
                    <div className="menu-items">
                        <span>{item.name} : {item.price}$</span>
                        {props.status === 'pending' ? <Button variant="danger" size="sm" onClick={removeItem(item.id)}>Remove</Button> : ''}
                    </div>
                </ListGroup.Item>
              })}
              <ListGroup.Item>Status: {props.status}</ListGroup.Item>
              <ListGroup.Item>Total Price: {props.mealItems.reduce((a, b) => a + b.price, 0).toFixed(2)}$</ListGroup.Item>
            </ListGroup>
              {props.status === 'pending' ? <Button variant="danger" size="sm" onClick={deleteOrder}>Remove</Button> : ''}
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
    setTrigger: () => dispatch(setTrigger()),
});

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps, mapDispatchToProps)(UserOrderItem);