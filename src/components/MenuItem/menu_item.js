import React from 'react'

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import Item from '../Items/Items';

import '../../pages/Weekdays/weekdaysList'

const MenuItem = (props) => {

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
        .then(data => {
            console.log(data.data.menu_items);
            setWeekDay(data.data.menu_items);
        })
        .catch()
    }, []);

    console.log(props);

    return (
        <div>
            {weekDay.map((item) => {
                return  <div className='weekdays'>hfdndfdfhrhrdh</div>
            })}
        </div>
    )
}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(MenuItem);