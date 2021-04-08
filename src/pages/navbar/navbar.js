import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';

import SignUp from '../../components/SignUp/signUp'
import Login from '../../components/SignIn/signin'
import Logout from '../../components/Logout/logout'

const NavBar = ({user}) => {
    console.log(user);
    return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              { !user ?
              (<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
              ) : (
                <Logout />
              )}
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(NavBar);
