import React from 'react'

import {useEffect} from 'react';
import {connect} from 'react-redux';

import OrderItems from '../OrderItems/OrderItems';

import { addItems } from '../../redux/menu/menu.actions';
import { setDate } from '../../redux/date/date.actions';

import '../AllItems/allItems.css';

const MenuItem = (props) => {

    let today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    let disabled;

    useEffect(() => {
        fetch('https://frozen-spire-70160.herokuapp.com/weekdays/' + props.match.params.id,{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            props.setDate(data.data.created_at.toString().slice(0, 10))
            props.addItems(data.data.menu_items.filter(item => !props.order.map(orderItem => orderItem.menu_item_type).includes(item.menu_item_type)));
        })
        .catch()
    }, [props.trigger]);

    if (props.date !== today) {
        disabled = true;
    }

    return (
        <div className="order-column" style={disabled ? {pointerEvents: "none", opacity: "0.8"} : {}}>
            <h4>Choose Items From Menu</h4>
            {props.menu.map((item) => {
                return  <OrderItems key={item.id} orderItem={item} {...props} />
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItems: value => dispatch(addItems(value)),
    setDate: value => dispatch(setDate(value)),
});

const mapStateToProps = state => ({ user: state.user.currentUser, menu: state.menu, order: state.order, trigger: state.trigger, date: state.date });

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);