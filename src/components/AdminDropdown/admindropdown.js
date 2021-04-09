import React from 'react'

import { DropdownButton, Dropdown } from 'react-bootstrap'
import { BrowserRouter , Switch, Route, Link, Redirect } from "react-router-dom";

const Admindropdown = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Admin button">
            <Link to='/createWeekDay'><Dropdown.Item as="button">Create a weekday</Dropdown.Item></Link>
            <Link to='/createMealItem'><Dropdown.Item as="button">Create meal item</Dropdown.Item></Link>
            <Link to='updateWeekDay'><Dropdown.Item as="button">Something else</Dropdown.Item></Link>
        </DropdownButton>
    )
}

export default Admindropdown