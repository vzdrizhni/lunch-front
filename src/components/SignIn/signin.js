import React, { Component } from "react";

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    login = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.login}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}