import React from 'react'

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import OrderItems from '../OrderItems/OrderItems';

import { addItem } from '../../redux/menu/menu.actions';

import '../AllItems/allItems.css';

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

    return (
        <div className="order-column">
            <h4>Choose Items From Menu</h4>
            {weekDay.map((item) => {
                return  <OrderItems key={item.id} orderItem={item} {...props} />
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value)),
});

const mapStateToProps = state => ({ user: state.user.currentUser, menu: state.menu });

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);