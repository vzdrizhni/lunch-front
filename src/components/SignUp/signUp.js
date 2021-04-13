import React, { Component } from "react";
import './signUp.css'

import { connect } from 'react-redux';
import {setUser} from '../../redux/user/user.actions'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        warning: ''
    }

    register = (e) => {
        e.preventDefault()

        fetch('https://frozen-spire-70160.herokuapp.com/users',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                this.setState({warning: data.error})
            } else {
                this.props.setUser(data);
                this.setState({username: '', email: '', password: '', warning: 'Account was created'})
                setTimeout(()=> {
                    this.setState({warning: ''})
                    this.props.history.push('/weekdays');
                }, 2000)
            }
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.register}>
                        <h3>Sign Up</h3>

                        <div>
                            <span className="warning">{this.state.warning}</span>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="First name" name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ user: state.user.currentUser });

const mapDispatchToProps = dispatch => ({
  setUser: value => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);