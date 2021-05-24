import React from 'react';

import {Card, Button} from 'react-bootstrap';

import {connect} from 'react-redux';

import {addItem} from '../../redux/menu/menu.actions';
import {setTrigger} from '../../redux/trigger/trigger.actions';

const Item = (props) => {

    const addItem = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/weekdays/${props.match.params.id}/menus`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({menu_items: [{id: props.id}]})
        })
        .then(response => response.json())
        .then(() => {
            props.setTrigger();
        })
        .catch(err => console.log(err))
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{`${props.price} $`}</Card.Text>
              <Card.Text>{props.type}</Card.Text>
              <Button variant="success" onClick={addItem}>Add to Menu</Button>
            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value)),
    setTrigger: () => dispatch(setTrigger()),
});

export default connect(null, mapDispatchToProps)(Item);