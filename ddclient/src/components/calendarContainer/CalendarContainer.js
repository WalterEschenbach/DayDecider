import React, { useState, useEffect } from 'react'
import Account from '../auth/account/Account'
import CalendarModal from '../calendarModal/CalendarModal'
import './calendarcontainer.css'

export default function CalendarContainer(props) {
    const [eventFocus, setEventFocus] = useState(props.eventFocus);
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        setEventFocus(props.eventFocus)
    }, [props.eventFocus])


    return (
        <div className="cContainer">
            <h1>{eventFocus}</h1>
            <CalendarModal 
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            />
            <Account />
            <div className="cTitle"><h2>DAYDECIDER</h2></div>
        </div>
    )
}
