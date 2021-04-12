import React from 'react';

import AllItems from '../../components/AllItems/allItems';
import MenuItem from '../../components/MenuItem/menu_item';
import OrderList from '../../components/OrderList/OrderList';

import { connect } from 'react-redux';

import './order.css'

const OrderPage = (props) => {

    if (props.user.user.admin) {
        return(
            <div className="order">
                <OrderList {...props}/>
                <MenuItem {...props}/>
                <AllItems {...props}/>
            </div>
        )
    } else {
        return(
            <div className="order">
                <OrderList {...props}/>
                <MenuItem {...props}/>
            </div>
        )
    }

};

const mapStateToProps = state => ({ user: state.user.currentUser, order: state.order });

export default connect(mapStateToProps)(OrderPage);