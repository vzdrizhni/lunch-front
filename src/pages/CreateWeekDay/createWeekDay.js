import React from 'react';

import {Button} from 'react-bootstrap';

import '../Weekdays/weekdays.css'

const CreateWeekDay = () => {
    return (
        <div className='weekdays'>
            <div className="mb-2">
                <Button variant="light" size="lg">
                 Create A WeekDay For Today
                </Button>
            </div>
        </div>
    )
}

export default CreateWeekDay;