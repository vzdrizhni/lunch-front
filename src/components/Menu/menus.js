import React from 'react'

import { Link } from "react-router-dom";

import {Card} from 'react-bootstrap'

const Menu = ({id, name}) => {
    return (
        <div>
            <Link to={`/weekday/${id}`}>
            <Card
                bg={'Secondary'.toLowerCase()}
                text={'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>{name}</Card.Header>
                    <Card.Body>
                      <Card.Title>Menu for {name} </Card.Title>
                      <Card.Text>
                        Click here to see the menu list and choose one of the menu list types!
                      </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Menu