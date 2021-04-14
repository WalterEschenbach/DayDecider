import React, {useEffect, useState} from 'react'
import CalendarContainer from '../calendarContainer/CalendarContainer'
import DetailContainer from '../detailContainer/DetailContainer'
import axios from 'axios'
import Settings from '../../config/settings'

import './dashboard.css'

export default function Dashboard() {
    const [eventList, setEventList] = useState([]);
    const [eventFocus, setEventFocus] = useState(eventList[0]);

    useEffect(()=>{
        const tURL = `${Settings.domain.server}/event/find`
        const transport = axios.create({withCredentials: true})

        transport.get(tURL)
        .then((res)=> {setEventList(res.data)})
    },[])

    useEffect(()=>{
        setEventFocus(eventFocus)
    }, [eventFocus])

    return (
        <div className="dashContainer">
            <DetailContainer 
            eventList={eventList} 
            eventFocus={eventFocus} 
            setEventFocus={setEventFocus}/>
            <CalendarContainer eventFocus={eventFocus} />            
        </div>
    )
}
