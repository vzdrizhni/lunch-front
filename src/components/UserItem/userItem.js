import { Card } from "react-bootstrap";

const UserItem = (props) => {
    return(
        <Card
            bg={'Light'.toLowerCase()}
            text={'dark'}
            style={{ width: '18rem' }}
            className="mb-2 super-card"
            >
            <Card.Header>User #{props.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{'dark'} {props.name} </Card.Title>
                    <Card.Text>{props.email}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default UserItem;