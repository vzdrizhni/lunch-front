import { connect } from 'react-redux';
import {useState, useEffect} from 'react';

import UserOrderItems from '../../components/UserOrderItems/userOrderItems'

const UserOrders = (props) => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user_orders', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setOrders(data.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {orders.map(item => <UserOrderItems />)}
        </div>
    )
};

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(UserOrders);