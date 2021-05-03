import React, { useState, useEffect } from 'react'
import CalendarModal from '../calendarModal/CalendarModal'
import './calendardetail.css'

function CalendarDetail(props) {
    const [eventFocus, setEventFocus] = useState(props.eventFocus);
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        setEventFocus(props.eventFocus)
    }, [props.eventFocus])

    return (
        <div className="cdContainer">
            <h1>{eventFocus}</h1>
            <CalendarModal 
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            />
        </div>
    )
}

export default CalendarDetail