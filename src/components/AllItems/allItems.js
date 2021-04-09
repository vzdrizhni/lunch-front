import React from 'react';
import {useState, useEffect} from 'react';

import {connect} from 'react-redux';

const AllItems = ({user}) => {
    const [mealItems, setMealItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/menu_items', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
    })

    return (
        <div className='order'>All Items</div>
    )

}

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(AllItems);