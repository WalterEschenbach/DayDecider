import React, { useState, useEffect } from 'react'
import CalendarModal from '../calendarModal/CalendarModal'
import Draggable from 'react-draggable'
import axios from 'axios'
import Settings from '../../config/settings'

import './calendardetail.css'

function CalendarDetail(props) {
    const [eventFocus, setEventFocus] = useState(props.eventFocus);
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        setEventFocus(props.eventFocus)
    }, [props.eventFocus])

    function handleSave(){
        const route = `${Settings.domain.server}/event/update`
        const body = {
            startDate,
            endDate,
            eventFocus
        }
        const transport = axios.create({withCredentials: true})

        transport.post(route, body)
        .then(res=> console.log('response:', res))
        .catch(err => console.log('err:', err))
    }

    return (
        <Draggable >
        <div style={{position: "absolute", width: "30rem", height: "40rem", zIndex: "2", right:"25px", bottom: "25px"}} >
        <div className="cdContainer">
            <h1>{eventFocus}</h1>
            <CalendarModal 
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            handleSave={handleSave}
            />
        </div>
        </div>
        </Draggable>
    )
}

export default CalendarDetail
