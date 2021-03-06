import React from 'react'
import CalendarComponent from '../calendarComponent/CalendarComponent'
import './calendardisplaycomponent.css'

function CalendarDisplayComponent(props) {
    return (
        <div className="ccContainer">
            <CalendarComponent eventFocus={props.eventFocus} data={props.data} color={props.color} />
        </div>
    )
}

export default CalendarDisplayComponent
