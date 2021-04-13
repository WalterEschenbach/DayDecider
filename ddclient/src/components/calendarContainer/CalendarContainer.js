import React, {useState, useEffect} from 'react'

import CalendarComponent from '../calendarComponent/CalendarComponent'
import Account from '../auth/account/Account'
import './calendarcontainer.css'

export default function CalendarContainer(props) {
    const [eventFocus, setEventFocus] = useState(props.eventFocus);

    useEffect(()=>{
        setEventFocus(props.eventFocus)
    },[props.eventFocus])


    return (
        <div className="cContainer">
            <h1>{eventFocus}</h1>
            <Account/>
            <CalendarComponent/>
            <div className="cTitle"><h2>DAYDECIDER</h2></div>
        </div>
    )
}
