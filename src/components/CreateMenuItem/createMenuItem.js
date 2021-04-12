import React from 'react';
import {useState} from 'react';

import {Modal, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';

const CreateMenuItem = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [menu_item_type, setMenuItemType] = useState('');
    const [image, setImage] = useState('');
    const [warning, setWarning] = useState('');

    console.log(name, price, menu_item_type, image);


    const createItemHandler = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('menu_item_type', menu_item_type.toLowerCase());
        formData.append('image', image);

        fetch('http://localhost:3000/menu_items', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            console.log(data);
            setWarning(data.error)
          }
        })
        .catch(err => console.log(err));
    }

    return (
        <Modal
        show={props.show} onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <div>
          <span className="warning">{warning}</span>
        </div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create A Meal Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={createItemHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)}/>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Label>Choose Menu Item Type</Form.Label>
            <Form.Control as="select" onChange={(e) => setMenuItemType(e.target.value)}>
                <option defaultValue="selected">First_Course</option>
                <option>Main_Course</option>
                <option>Drink</option>
            </Form.Control>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Choose a picture" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={props.onHide}>
              Submit
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(CreateMenuItem);