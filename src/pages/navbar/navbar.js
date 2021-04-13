import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';


import SignUp from '../../components/SignUp/signUp'
import Login from '../../components/SignIn/signin'
import Logout from '../../components/Logout/logout'
import WeekdaysList from '../../pages/Weekdays/weekdaysList'
import Order from '../OrderPage/orderPage'
import AdminDropdown from '../../components/AdminDropdown/admindropdown'
import CreateWeekDay from '../CreateWeekDay/createWeekDay'
import ChangeCredentials from '../ChangeCredentials/changeCredentials';
import Users from '../Users/users';
import UserOrders from '../../pages/UsersOrders/usersOrders';
import WeekDayOrders from '../WeekDayOrdersPage/weekDayOrderPage';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const NavBar = (props) => {
    return (
    <HashRouter>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {props.user && props.user.user.admin ? (<AdminDropdown />) : ''}
              { !props.user ?
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
        <Route exact path="/weekdays" component={WeekdaysList} />
        <Route path="/sign-in" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/weekday/:id" component={Order} />
        <Route exact path='/createWeekDay' component={CreateWeekDay}/>
        <Route exact path='/change' component={ChangeCredentials}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/user_orders' component={UserOrders}/>
        <Route exact path='/order_days' component={WeekdaysList}/>
        <Route exact path='/order_days/:id' component={WeekDayOrders} />
      </Switch>
    </HashRouter>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(NavBar);
