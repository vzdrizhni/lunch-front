import React, { Component } from "react";

import { connect } from 'react-redux';
import {setUser} from '../../redux/user/user.actions'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    register = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/users',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            this.props.setUser(data);
            console.log(this.props);
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <form onSubmit={this.register}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" name="username" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({ user: state.user.currentUser });

const mapDispatchToProps = dispatch => ({
  setUser: value => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);