import React from 'react';

import {connect} from 'react-redux';

import OrderMenuItems from '../OrderMenuItems/orderMenuItems';
import SubmitOrder from '../../components/SubmitOrder/submitOrder';

import '../AllItems/allItems.css'

const OrderList = (props) => {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    let disabled;

    const totalPrice = props.order.reduce((a, b) => a + b.price, 0);

    if (props.date !== today) {
        disabled = true;
    }

    return(
        <div className='order-column' style={disabled ? {pointerEvents: "none", opacity: "0"} : {}}>
            <h4>Order List</h4>
            {props.order.map((item) => {
                return <OrderMenuItems item={item} key={item.id} />
            })}
            <div>
                {props.order.length > 0 ? <h5>Total Price: {totalPrice.toFixed(2)}</h5> : ''}
                {props.order.length > 0 ? <SubmitOrder {...props} /> : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ order: state.order, user: state.user.currentUser, date: state.date });

export default connect(mapStateToProps)(OrderList);