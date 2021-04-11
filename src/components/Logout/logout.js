import React from 'react'

import { logout } from '../../redux/user/user.actions';
import { connect }from 'react-redux'

import { Link } from "react-router-dom";

const Logout = ({logout}) => {

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} onClick = {() => logout()}>Logout</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/change"}>Change Credentials</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/user_orders"}>Orders</Link>
            </li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);