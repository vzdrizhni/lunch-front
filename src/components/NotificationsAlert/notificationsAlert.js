import React from 'react';
import {connect} from 'react-redux';

const notificationsAlert = (props) => {
    if (props.notifications.filter(item => item.checked === false)) {
        return(
            <div className="alert-number">
                {props.notifications.filter(item => item.checked === false).length}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notifications: state.notifications
})

export default connect(mapStateToProps)(notificationsAlert)