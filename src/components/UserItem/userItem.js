import { Card } from "react-bootstrap";

const UserItem = () => {
    return(
        <Card
            bg={'Light'.toLowerCase()}
            text={'dark'}
            style={{ width: '18rem' }}
            className="mb-2 super-card"
            >
            <Card.Header>Name</Card.Header>
                <Card.Body>
                    <Card.Title>{'dark'} Card Title </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                    </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default UserItem;