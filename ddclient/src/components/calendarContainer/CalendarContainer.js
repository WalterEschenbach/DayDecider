import React from 'react'

import CalendarComponent from '../calendarComponent/CalendarComponent'
import Account from '../auth/account/Account'
import './calendarcontainer.css'

export default function CalendarContainer() {


    return (
        <div className="cContainer">
            <Account/>
            <CalendarComponent/>
            <div className="cTitle"><h1>DAYDECIDER</h1></div>
        </div>
    )
}
