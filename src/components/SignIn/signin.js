import React, { Component } from "react";

import '../SignUp/signUp.css'

import { connect } from 'react-redux';
import {setUser} from '../../redux/user/user.actions'

class Login extends Component {

    state = {
        email: '',
        password: '',
        warning: ''
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
        .then(data => {
            if (data.error) {
                this.setState({warning: data.error})
            } else {
                this.props.setUser(data);
                this.setState({email: '', password: '', warning: 'You are logged in.'});
                setTimeout(()=> {
                    this.setState({warning: ''})
                    this.props.history.push('/');
                }, 1000)
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
                    <form onSubmit={this.login}>
                        <h3>Sign In</h3>

                        <div>
                            <span className="warning">{this.state.warning}</span>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);