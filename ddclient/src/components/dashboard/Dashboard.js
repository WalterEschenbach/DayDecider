import React, {useEffect, useState} from 'react'
import CalendarContainer from '../calendarContainer/CalendarContainer'
import DetailContainer from '../detailContainer/DetailContainer'
import axios from 'axios'
import Settings from '../../config/settings'

import './dashboard.css'

export default function Dashboard() {
    const [events, setEvents] = useState([]);
    const [eventFocus] = useState(events[0]);

    useEffect(()=>{
        const tURL = `${Settings.domain.server}/event/find`
        const transport = axios.create({withCredentials: true})

        transport.get(tURL)
        .then((res)=> {
            setEvents(res.data)
            console.log(res.data)
        })
    },[])

    return (
        <div className="dashContainer">
            <DetailContainer events={events} eventFocus={eventFocus}/>
            <CalendarContainer eventFocus={eventFocus}/>            
        </div>
    )
}
