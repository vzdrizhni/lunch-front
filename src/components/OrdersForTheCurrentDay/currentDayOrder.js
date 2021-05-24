import {
  Card,
  ListGroup,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { ActionCable } from "react-actioncable-provider";

import { useState } from "react";
import { connect } from "react-redux";
import React from "react";

import { setTrigger } from "../../redux/trigger/trigger.actions";

import "./orderCard.css";

const CurrentDayOrders = (props) => {
  const [status, setStatus] = useState(props.status);
  const [statusDisplay, setStatusDisplay] = useState("none");

  const handleReceivedMessage = response => {
    console.log(JSON.parse(response));
    console.log(props.user.user.id);
  };

  console.log(props);

  const statusChanger = () => {
    fetch("http://localhost:3000/orders/" + props.id, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + props.user.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.setTrigger();
        setStatusDisplay("inline-block");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ActionCable
        channel={{channel: "NotificationsChannel", room: props.user.user.id}}
        onReceived={handleReceivedMessage}
      />
      <Card style={{ width: "18rem" }} className="order-card">
        <Card.Header>
          <span>Date: {props.name}</span>
        </Card.Header>
        <ListGroup variant="flush">
        <ListGroup.Item>
            <span>User id: {props.owner}</span>
          </ListGroup.Item>
          <ListGroup.Item className="status">
            <span>Status:</span>
            <Dropdown>
              <DropdownButton
                id="dropdown-basic-button"
                title={status}
                onSelect={(e) => setStatus(e)}
              >
                <Dropdown.Item eventKey="accepted" style={{ color: "#5cb85c" }}>
                  Accept
                </Dropdown.Item>
                <Dropdown.Item eventKey="rejected" style={{ color: "#d9534f" }}>
                  Reject
                </Dropdown.Item>
                <Dropdown.Item eventKey="pending" style={{ color: "#0275d8" }}>
                  Pending
                </Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Price: {props.total_price} $</span>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="warning" size="sm" onClick={statusChanger}>
          Submit
        </Button>
        <ListGroup.Item style={{ display: statusDisplay }}>
          <span>Status changed to {props.status}</span>
        </ListGroup.Item>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  trigger: state.trigger,
});

const mapDispatchToProps = (dispatch) => ({
  setTrigger: () => dispatch(setTrigger()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDayOrders);
