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
                      <Card.Title>{'white'} Card Title </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Menu