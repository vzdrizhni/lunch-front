import React from 'react'

const MenuItem = () => {

    const [weekDay, setWeekDay] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/weekdays',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setWeekDay(data.data))
        .catch()
    }, [])

    return (
        <div></div>
    )
}

export default MenuItem;