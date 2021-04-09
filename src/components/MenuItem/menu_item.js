import React from 'react'

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import '../../pages/Weekdays/weekdaysList'

const MenuItem = (props) => {
    console.log(props);

    const [weekDay, setWeekDay] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/weekdays/' + props.match.params.id,{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setWeekDay(data.data))
        .catch()
    }, []);

    console.log(weekDay);

    return (
        <div className='weekdays'>hfdndfdfhrhrdh</div>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(MenuItem);