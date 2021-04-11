import { Card, ListGroup } from 'react-bootstrap';

const UserOrderItem = (props) => {
    console.log(props);
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Header>date: {props.name}</Card.Header>
            <ListGroup variant="flush">
              {props.mealItems.map(item => {
                return <ListGroup.Item><span>{item.name}</span> : <span>{item.price}$</span></ListGroup.Item>
              })}
              <ListGroup.Item>Total Price: {props.mealItems.reduce((a, b) => a + b.price, 0)}$</ListGroup.Item>
            </ListGroup>
        </Card>
    )
};

export default UserOrderItem;