import React from "react";

import { connect } from "react-redux";

const NotificationsList = (props) => {
    console.log(props.notifications);
  return (
    <div className="notification-list">
      {props.notifications.map((item, index) => (
        <div key={index}>
            <span key={index}>{item.status}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ notifications: state.notifications });

export default connect(mapStateToProps)(NotificationsList);
