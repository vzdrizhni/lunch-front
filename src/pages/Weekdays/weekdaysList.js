import React from 'react';
import {useState, useEffect} from 'react';

import {Spinner} from 'react-bootstrap'

import Menu from '../../components/Menu/menus'

import {connect} from 'react-redux';

import './weekdays.css'

const WeekdaysList = ({user}) => {
    const [weekDaysList, setWeekDaysList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/weekdays',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setWeekDaysList(data.data))
        .catch()
    }, [])

    if (weekDaysList.length === 0) {
        console.log('gotchas');
        return (
            <div className='spinner'>
                <Spinner animation="border" variant="white" />
            </div>
        )
    } else {
        return (
            <div className='weekdays'>
                {weekDaysList.map(item => {
                    return <Menu id={item.id} name={item.name} key={item.id}/>
                })}
            </div>
        )
    }
};

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(WeekdaysList);