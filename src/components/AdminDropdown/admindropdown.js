import React from 'react'

import { DropdownButton, Dropdown } from 'react-bootstrap'
import { BrowserRouter , Switch, Route, Link, Redirect } from "react-router-dom";

import CreateMenuItem from '../CreateMenuItem/createMenuItem';

const Admindropdown = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <DropdownButton id="dropdown-basic-button" title="Admin button">
            <Link to='/createWeekDay'><Dropdown.Item as="button">Create a weekday</Dropdown.Item></Link>
            <Dropdown.Item as="button" onClick={() => setModalShow(true)}>Create meal item</Dropdown.Item>
            <Link to='updateWeekDay'><Dropdown.Item as="button">Something else</Dropdown.Item></Link>
            <CreateMenuItem show={modalShow} onHide={() => setModalShow(false)} />
        </DropdownButton>
    )
}

export default Admindropdown