import React from 'react'
import Account from '../auth/account/Account'
import CalendarDetail from '../calendarDetail/CalendarDetail'
import CalendarDisplayComponent from '../calendarDisplayComponent/CalendarDisplayComponent'
import './calendarcontainer.css'

export default function CalendarContainer(props) {

    return (
        <div className="cContainer">
                <CalendarDetail eventFocus={props.eventFocus} data={props.data}/>
                <CalendarDisplayComponent />
                <Account />
                <div className="cTitle"><h2>DAYDECIDER</h2></div>
        </div>
    )
}
