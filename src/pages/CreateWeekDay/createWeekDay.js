import React from 'react';

import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import '../Weekdays/weekdays.css'

const CreateWeekDay = (props) => {

    console.log(props);

    const createDay = () => {
        fetch('http://localhost:3000/weekdays', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(() => {
            props.history.push('/');
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='weekdays'>
            <div className="mb-2">
                <Button variant="light" size="lg" onClick={createDay} >
                 Create A WeekDay For Today
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(CreateWeekDay);