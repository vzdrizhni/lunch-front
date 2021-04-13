import { connect } from 'react-redux';
import {useState, useEffect} from 'react';

import UserOrderItems from '../../components/UserOrderItems/userOrderItems'

import '../OrderPage/order.css'

const UserOrders = (props) => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://frozen-spire-70160.herokuapp.com/user_orders', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setOrders(data.data))
        .catch(err => console.log(err))
    }, [props.trigger])

    return(
        <div className="order">
            {orders.map(item => <UserOrderItems  id={item.id} name={item.weekday.name} price={item.price} key={item.id} mealItems={item.menu_items} status={item.status} />)}
        </div>
    )
};

const mapStateToProps = state => ({ user: state.user.currentUser, trigger: state.trigger });

export default connect(mapStateToProps)(UserOrders);