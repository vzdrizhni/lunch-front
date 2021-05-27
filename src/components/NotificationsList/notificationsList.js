import React from "react";

import { connect } from "react-redux";

import "./notificationList.css";

const NotificationsList = (props) => {
  const getStyle = (item) => {
    console.log(item.status);
    if (item.status === "pending") {
      return "#0275d8";
    } else if (item.status === "rejected") {
      return "#d9534f";
    } else {
      return "#5cb85c";
    }
  };

  return (
    <div className="notification-list" style={props.style}>
      {props.notifications.map((item, index) => (
        <div key={index} className="notification-item">
          <span key={index}>Your order status changed to</span> <span style={{color: getStyle(item)}}>{item.status}</span>
          <div>Time: {item.time}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ notifications: state.notifications });

export default connect(mapStateToProps)(NotificationsList);
