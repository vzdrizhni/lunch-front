import React from 'react'

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import Item from '../Items/Items';

import { addItem } from '../../redux/menu/menu.actions'

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
            setWeekDay(data.data.menu_items);
        })
        .catch()
    }, [props.menu]);

    console.log(props);

    return (
        <div>
            {weekDay.map((item) => {
                return  <div className='weekdays' key={item.id}>hfdndfdfhrhrdh</div>
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value)),
});

const mapStateToProps = state => ({ user: state.user.currentUser, menu: state.menu });

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);