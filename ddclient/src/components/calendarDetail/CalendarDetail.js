import React, { useState, useEffect } from 'react'
import CalendarModal from '../calendarModal/CalendarModal'
import Draggable from 'react-draggable'

import './calendardetail.css'

function CalendarDetail(props) {
    const [eventFocus, setEventFocus] = useState(props.eventFocus);
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        setEventFocus(props.eventFocus)
    }, [props.eventFocus])

    return (
        <Draggable>
        <div style={{position: "absolute", width: "30rem", height: "40rem", zIndex: "2", right:"25px", bottom: "25px"}}>
        <div className="cdContainer">
            <h1>{eventFocus}</h1>
            <CalendarModal 
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            />
        </div>
        </div>
        </Draggable>
    )
}

export default CalendarDetail
