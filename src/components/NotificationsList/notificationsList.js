import React from "react";

import { connect } from "react-redux";

import './notificationList.css'

const NotificationsList = (props) => {
    console.log(props);
  return (
    <div className="notification-list" style={props.style}>
      {props.notifications.map((item, index) => (
        <div key={index} className="notification-item">
            <span key={index}>Your order status changed to {item.status}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ notifications: state.notifications });

export default connect(mapStateToProps)(NotificationsList);
