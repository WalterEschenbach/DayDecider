import React from 'react'
import Account from '../auth/account/Account'
import CalendarDetail from '../calendarDetail/CalendarDetail'
import CalendarDisplayComponent from '../calendarDisplayComponent/CalendarDisplayComponent'
import Draggable from 'react-draggable'
import './calendarcontainer.css'

export default function CalendarContainer(props) {

    return (
        <div className="cContainer">
                <Draggable>
                    <div style={{position: "absolute", width: "30rem", height: "40rem"}}>
                        <CalendarDetail eventFocus={props.eventFocus}/>
                    </div>
                </Draggable>
                <CalendarDisplayComponent />
                <Account />
                <div className="cTitle"><h2>DAYDECIDER</h2></div>
        </div>
    )
}
