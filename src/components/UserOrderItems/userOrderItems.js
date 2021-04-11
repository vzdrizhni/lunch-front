import { Card, ListGroup, Button } from 'react-bootstrap';

import {connect} from 'react-redux';

import {setTrigger} from '../../redux/trigger/trigger.actions'

const UserOrderItem = (props) => {

    let menuItems = {};

    menuItems.menu_items = [...props.mealItems];

    const removeItem = (param) => (e) => {
        menuItems.menu_items = menuItems.menu_items.filter(item => item.id !== param);

        console.log(menuItems);

        fetch('http://localhost:3000/orders/'+props.id, {
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
        fetch('http://localhost:3000/orders/'+props.id, {
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
        <Card style={{ width: '18rem' }}>
            <Card.Header>date: {props.name}</Card.Header>
            <ListGroup variant="flush">
              {props.mealItems.map(item => {
                return <ListGroup.Item>
                    <span>{item.name}</span> : <span>{item.price}$</span>
                    {props.status === 'pending' ? <Button variant="danger" size="sm" onClick={removeItem(item.id)}>Remove</Button> : ''}
                </ListGroup.Item>
              })}
              <ListGroup.Item>Status: {props.status}</ListGroup.Item>
              <ListGroup.Item>Total Price: {props.mealItems.reduce((a, b) => a + b.price, 0)}$</ListGroup.Item>
              {props.status === 'pending' ? <Button variant="danger" size="sm" onClick={deleteOrder}>Remove</Button> : ''}
            </ListGroup>
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
    setTrigger: () => dispatch(setTrigger()),
});

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps, mapDispatchToProps)(UserOrderItem);