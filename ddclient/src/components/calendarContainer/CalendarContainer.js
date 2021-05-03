import React, { useState, useEffect } from 'react'
import Account from '../auth/account/Account'
import CalendarDetail from '../calendarDetail/CalendarDetail'
import CalendarChart from '../calendarChart/CalendarChart'
import CalendarComponent from '../calendarComponent/CalendarComponent'
import './calendarcontainer.css'

export default function CalendarContainer(props) {

    return (
        <div className="cContainer">
            <row style={{display:"flex", flexDirection: "row", height: "100%", width: "100%"}}>
                <CalendarComponent/>
                <CalendarDetail/>
            </row>
            <row style={{display:"flex", flexDirection: "row", height: "100%", width: "100%"}}>
                <CalendarChart/>
            </row>
                <Account />
                <div className="cTitle"><h2>DAYDECIDER</h2></div>
        </div>
    )
}
