import React from 'react'

import { Link } from "react-router-dom";

import {Card} from 'react-bootstrap'

const WeekDaysOrderList = ({id, name}) => {
    return (
        <div>
            <Link to={`/order_days/${id}`}>
            <Card
                bg={'Warning'.toLowerCase()}
                text={'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header><span>Date: {name}</span></Card.Header>
                    <Card.Body>
                      <Card.Title>For admins only!</Card.Title>
                      <Card.Text>
                        Click here to see the order history for this day!
                      </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
};

export default WeekDaysOrderList;