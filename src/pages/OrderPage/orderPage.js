import React from 'react';

import AllItems from '../../components/AllItems/allItems';
import MenuItem from '../../components/MenuItem/menu_item';
import OrderList from '../../components/OrderList/OrderList';

import './order.css'

const OrderPage = (props) => {
    return(
        <div className="order">
            <OrderList {...props}/>
            <MenuItem {...props}/>
            <AllItems {...props}/>
        </div>
    )
}

export default OrderPage