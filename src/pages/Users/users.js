import { connect } from 'react-redux';
import {useState, useEffect} from 'react';

import UserItem from '../../components/UserItem/userItem';

import './users.css';

const Users = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsers(data.data)
        })
        .catch(err => console.log(err))
    }, [])

    console.log(users);

    return(
        <div className="users-wrapper">
            {users.map(item => <UserItem key={item.id} />)}
        </div>
    )
};

const mapStateToProps = state => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(Users);