import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { connect } from 'react-redux';

import SignUp from '../../components/SignUp/signUp'
import Login from '../../components/SignIn/signin'
import Logout from '../../components/Logout/logout'
import WeekdaysList from '../../pages/Weekdays/weekdaysList'
import Order from '../OrderPage/orderPage'
import AdminDropdown from '../../components/AdminDropdown/admindropdown'
import CreateWeekDay from '../CreateWeekDay/createWeekDay'
import AllItems from '../../components/AllItems/allItems'

const NavBar = ({user}) => {
    return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {user && user.user.admin ? (<AdminDropdown />) : ''}
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

      <Switch>
        <Route exact path="/" render={() => user ? (<WeekdaysList />) : (<Redirect to='/sign-in' />) } />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/weekday/:id" component={Order} />
        <Route exact path='/createWeekDay' component={CreateWeekDay}/>
        <Route exact path='/order' component={AllItems}/>
      </Switch>
    </Router>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(NavBar);
