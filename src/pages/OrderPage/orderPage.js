import React from 'react';

import AllItems from '../../components/AllItems/allItems';
import MenuItem from '../../components/MenuItem/menu_item';

const OrderPage = (props) => {
    console.log(props);
    return(
        <div className="o">
            <MenuItem {...props}/>
            <AllItems {...props}/>
        </div>
    )
}

export default OrderPage