import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import { emptyOrder } from '../../redux/Order/order.actions'

const SubmitOrder = (props) => {

    console.log(props);

    const makeOrder = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/weekdays/${props.match.params.id}/orders`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({menu_items: props.order})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            props.emptyOrder()
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <Button variant="success" size="lg" block onClick={makeOrder}>
              Make Order
            </Button>
        </div>
    )
};

const mapStateToProps = state => ({ order: state.order, user: state.user.currentUser });

const mapDispatchToProps = dispatch => ({
    emptyOrder: () => dispatch(emptyOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrder);
