import { connect } from 'react-redux';
import {useState, useEffect} from 'react';

import CurrentDayOrders from '../../components/OrdersForTheCurrentDay/currentDayOrder';

const WeekDayOrders = (props) => {

    console.log(props);

    const [orders, setOrders] = useState([]);
    const [weekday, setWeekday] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/weekdays/'+props.match.params.id, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            setWeekday(data.data.name)
            setOrders(data.data.orders)
        })
        .catch(err => console.log(err))
    }, [props.trigger])

    return(
        <div className="order">
            {orders.map(item => <CurrentDayOrders key={item.id} total_price={item.total_price} name={weekday} status={item.status} id={item.id} />)}
        </div>
    )
};

const mapStateToProps = state => ({ user: state.user.currentUser, trigger: state.trigger });

export default connect(mapStateToProps)(WeekDayOrders);