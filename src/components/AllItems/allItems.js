import React from 'react';
import {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import Items from '../Items/Items'

import './allItems.css'

const AllItems = (props) => {

    console.log(props);

    const [mealItems, setMealItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/menu_items', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMealItems(data.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='order'>
            {mealItems.map(item => {
                return <Items name={item.name} price={item.price} type={item.menu_item_type} image={item.image} key={item.id} id={item.id} {...props} />
            })}
        </div>
    )

}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(AllItems);