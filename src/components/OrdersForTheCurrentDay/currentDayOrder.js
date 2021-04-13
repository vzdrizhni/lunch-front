import { Card, ListGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';

import {useState} from 'react'
import {connect} from 'react-redux';

import {setTrigger} from '../../redux/trigger/trigger.actions';

import './orderCard.css'

const CurrentDayOrders = (props) => {

    const [status, setStatus] = useState(props.status);

    const statusChanger = () => {
        fetch('https://frozen-spire-70160.herokuapp.com/orders/'+props.id, {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status: status})
        })
        .then(response => response.json())
        .then(data => props.setTrigger())
        .catch(err => console.log(err))
    }

    return(
        <Card style={{ width: '18rem' }} className="order-card">
            <Card.Header><span>Date: {props.name}</span></Card.Header>
            <ListGroup variant="flush" >
                <ListGroup.Item className="status"><span>Status:</span>
                <Dropdown>
                    <DropdownButton id="dropdown-basic-button" title={status} onSelect={(e) => setStatus(e)}>
                        <Dropdown.Item eventKey="accepted">Accept</Dropdown.Item>
                        <Dropdown.Item eventKey="rejected">Reject</Dropdown.Item>
                        <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
              </ListGroup.Item>
              <ListGroup.Item><span>Price: {props.total_price} $</span></ListGroup.Item>
            </ListGroup>
            <Button variant="warning" size="sm" onClick={statusChanger}>Submit</Button>
        </Card>
    )
};

const mapStateToProps = state => ({ user: state.user.currentUser, trigger: state.trigger });

const mapDispatchToProps = dispatch => ({
    setTrigger: () => dispatch(setTrigger()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDayOrders);