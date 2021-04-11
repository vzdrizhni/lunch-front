import React from 'react'

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import OrderItems from '../OrderItems/OrderItems';

import { addItems } from '../../redux/menu/menu.actions';

import '../AllItems/allItems.css';

const MenuItem = (props) => {

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
            console.log(data);
            props.addItems(data.data.menu_items.filter(item => !props.order.map(orderItem => orderItem.menu_item_type).includes(item.menu_item_type)));
        })
        .catch()
    }, [props.trigger]);

    return (
        <div className="order-column">
            <h4>Choose Items From Menu</h4>
            {props.menu.map((item) => {
                return  <OrderItems key={item.id} orderItem={item} {...props} />
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItems: value => dispatch(addItems(value)),
});

const mapStateToProps = state => ({ user: state.user.currentUser, menu: state.menu, order: state.order, trigger: state.trigger });

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);