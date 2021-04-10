import React from 'react';

import {Card, Button} from 'react-bootstrap';

import {connect} from 'react-redux';

import {addItem} from '../../redux/menu/menu.actions'

const Item = (props) => {
    const {name, price, menu_item_type, image, id} = props;

    const addItem = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/weekdays/${props.match.params.id}/menus`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({menu_items: [{id: id}]})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            props.addItem(data.data.menu_items[0])
        })
        .catch(err => console.log(err))
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{`${price} $`}</Card.Text>
              <Card.Text>{menu_item_type}</Card.Text>
              <Button variant="success" onClick={addItem}>Add to Menu</Button>
            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value)),
});

export default connect(null, mapDispatchToProps)(Item);