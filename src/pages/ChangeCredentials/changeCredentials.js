import {useState, useEffect} from 'react';

import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import React from 'react';

import './change.css';

const ChangeCredentials = (props) => {
    const [allValues, setAllValues] = useState({
        username: '',
        password: '',
    });

    const changeHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/change', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allValues)
        })
        .then(response => response.json())
        .then(data => {
            props.history.push('/');
        })
        .catch()
    }

    const handleChange = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    return(
        <Form className="super-form">
            <Form.Group controlId="formBasicEmail" className="ferm-group">
              <Form.Label>Change Name</Form.Label>
              <Form.Control type="text" placeholder="Enter desired name" name="username" onChange={handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="ferm-group">
              <Form.Label>Change Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
            <Button className="ferm-btn" variant="primary" type="submit" onClick={changeHandler}>
              Submit
            </Button>
        </Form>
    )
};

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(ChangeCredentials);