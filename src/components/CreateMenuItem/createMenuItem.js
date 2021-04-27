import React from 'react';
import {useState} from 'react';

import {Modal, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';

import { allItemsTriggerAction } from '../../redux/allItemsTrigger/allItemsTrigger.action.js'

const CreateMenuItem = (props) => {

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [menu_item_type, setMenuItemType] = useState('first_course');
    const [image, setImage] = useState();
    const [warning, setWarning] = useState([]);

    const createItemHandler = (e) => {
        e.preventDefault()

        const formData = new FormData();
        if (name) formData.append('name', name);
        if (price) formData.append('price', price);
        if (menu_item_type) formData.append('menu_item_type', menu_item_type.toLowerCase());
        if (image) formData.append('image', image);

        fetch('https://frozen-spire-70160.herokuapp.com/menu_items', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            setWarning(data.message)
          } else {
            clearFields()
            props.allItemsTrigger()
            props.onHide()
          }
        })
        .catch(err => console.log(err));
    }

    const clearFields = () => {
      setName();
      setPrice();
      setMenuItemType();
      setImage();
      setWarning([]);
    }

    return (
        <Modal
        show={props.show} onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <div>
          {warning.map(item => <div className="warning" key={item}>{item}</div>)}
        </div>
        <Modal.Header closeButton onClick={clearFields}>
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
                <option value="first_course">First_Course</option>
                <option value="main_course">Main_Course</option>
                <option value="drink">Drink</option>
            </Form.Control>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Choose a picture" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  allItemsTrigger: () => dispatch(allItemsTriggerAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateMenuItem);