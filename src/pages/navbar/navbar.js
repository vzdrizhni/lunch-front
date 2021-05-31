import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { ActionCable } from "react-actioncable-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import boopSfx from "../../assets/mixkit-software-interface-remove-2576.wav";
import moment from 'moment';
import { slide as Menu } from 'react-burger-menu';
import BurgerPicture from '../../assets/free-icon-menu-1828859.png'

import {
  addNotification,
  removeFirstNotification,
} from "../../redux/notifications/notifications.actions";

import SignUp from "../../components/SignUp/signUp";
import Login from "../../components/SignIn/signin";
import Logout from "../../components/Logout/logout";
import WeekdaysList from "../../pages/Weekdays/weekdaysList";
import Order from "../OrderPage/orderPage";
import AdminDropdown from "../../components/AdminDropdown/admindropdown";
import CreateWeekDay from "../CreateWeekDay/createWeekDay";
import ChangeCredentials from "../ChangeCredentials/changeCredentials";
import Users from "../Users/users";
import UserOrders from "../../pages/UsersOrders/usersOrders";
import WeekDayOrders from "../WeekDayOrdersPage/weekDayOrderPage";
import NotificationsList from "../../components/NotificationsList/notificationsList";
import NotificationsAlert from "../../components/NotificationsAlert/notificationsAlert";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const NavBar = (props) => {
  const [play] = useSound(boopSfx);
  const [statusDisplay, setStatusDisplay] = useState("none");
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    play();
  }, [playSound]);

  const handleReceivedMessage = (response) => {
    response = JSON.parse(response);
    response["time"] = moment().format('LLL');
    props.addNotificationDispatcher(response);
    setPlaySound((prev) => {
      return !prev;
    });
  };

  const displayHandler = () => {
    if (statusDisplay === "none") {
      setStatusDisplay("flex");
    } else {
      setStatusDisplay("none");
    }
    if (props.notifications.map((item) => item.checked).includes(false)) {
      console.log(props.notifications);
      props.removeFirstNotificationDispatcher();
    }
  };

  return (
    <HashRouter>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {props.user ? (
            <ActionCable
              channel={{
                channel: "NotificationsChannel",
                room: props.user.user.id,
              }}
              onReceived={handleReceivedMessage}
            />
          ) : undefined}
          <div className="navbar-collapse" id="navbarTogglerDemo02">
          <Menu id={ "sidebar" } customBurgerIcon={ <img src={BurgerPicture} width={ '35%' } /> }>
            {props.user && props.user.user.admin ? <AdminDropdown /> : ""}
            {!props.user ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            ) : (
              <Logout />
            )}
          </Menu>
          </div>
          <div className='notification-block' style={{position: 'relative'}}>
            <FontAwesomeIcon icon={faBell} onClick={displayHandler} />
            <NotificationsAlert />
            <NotificationsList style={{ display: statusDisplay }} />
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/weekdays" component={WeekdaysList} />
        <Route path="/sign-in" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/weekday/:id" component={Order} />
        <Route exact path="/createWeekDay" component={CreateWeekDay} />
        <Route exact path="/change" component={ChangeCredentials} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/user_orders" component={UserOrders} />
        <Route exact path="/order_days" component={WeekdaysList} />
        <Route exact path="/order_days/:id" component={WeekDayOrders} />
      </Switch>
    </HashRouter>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  notifications: state.notifications,
});

const mapDispatchToProps = (dispatch) => ({
  addNotificationDispatcher: (item) => dispatch(addNotification(item)),
  removeFirstNotificationDispatcher: () => dispatch(removeFirstNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
