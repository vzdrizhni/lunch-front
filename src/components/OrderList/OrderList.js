import React from 'react';

import {connect} from 'react-redux';

import OrderMenuItems from '../OrderMenuItems/orderMenuItems';

import '../AllItems/allItems.css'

const OrderList = (props) => {
    console.log(props);
    return(
        <div className='order-column'>{props.order.map((item) => {
            return <OrderMenuItems item={item} key={item.id} />
        })}</div>
    )
}

const mapStateToProps = state => ({ order: state.order, user: state.user.currentUser });

export default connect(mapStateToProps)(OrderList);