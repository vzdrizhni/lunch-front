import React from 'react';

import {connect} from 'react-redux';

import OrderMenuItems from '../OrderMenuItems/orderMenuItems';
import SubmitOrder from '../../components/SubmitOrder/submitOrder';

import '../AllItems/allItems.css'

const OrderList = (props) => {
    return(
        <div className='order-column'>
            <h4>Order List</h4>
            {props.order.map((item) => {
                return <OrderMenuItems item={item} key={item.id} />
            })}
            <div>
                {props.order.length > 0 ? <SubmitOrder {...props} /> : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ order: state.order, user: state.user.currentUser });

export default connect(mapStateToProps)(OrderList);