import React from 'react';
import {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import Items from '../Items/Items'

import './allItems.css'

const AllItems = (props) => {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    let disabled;

    const [mealItems, setMealItems] = useState([]);

    useEffect(() => {
        fetch('https://frozen-spire-70160.herokuapp.com/menu_items', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setMealItems(data.data.filter(item => !props.menu.map(orderItem => orderItem.id).includes(item.id)));
        })
        .catch(err => console.log(err))
    }, [props.menu.length])

    if (props.date !== today) {
        disabled = true;
    }

    return (
        <div className='order-column' style={disabled ? {pointerEvents: "none", opacity: "0"} : {}}>
            <h4>Add items to menu</h4>
            {mealItems.map(item => {
                return <Items name={item.name} price={item.price} type={item.menu_item_type} image={item.image} key={item.id} id={item.id} {...props} />
            })}
        </div>
    )

}

const mapStateToProps = state => ({ user: state.user.currentUser, date: state.date, menu: state.menu });

export default connect(mapStateToProps)(AllItems);