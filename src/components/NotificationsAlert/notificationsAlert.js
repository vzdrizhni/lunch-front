import React from 'react';
import {connect} from 'react-redux';

const notificationsAlert = (props) => {
    if (props.notifications.filter(item => item.checked === false).length > 0) {
        return(
            <div className="alert-number">
                {props.notifications.filter(item => item.checked === false).length}
            </div>
        )
    } else {
        return(
            <span></span>
        )
    }
}

const mapStateToProps = state => ({
    notifications: state.notifications
})

export default connect(mapStateToProps)(notificationsAlert)