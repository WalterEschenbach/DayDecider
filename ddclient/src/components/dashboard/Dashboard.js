import React, {useEffect, useState} from 'react'
import CalendarContainer from '../calendarContainer/CalendarContainer'
import DetailContainer from '../detailContainer/DetailContainer'
import axios from 'axios'
import Settings from '../../config/settings'

import './dashboard.css'

export default function Dashboard() {
    const [eventList, setEventList] = useState([]);
    const [eventFocus, setEventFocus] = useState();
    const [group, setGroup] = useState();

    useEffect(()=>{
        const tURL = `${Settings.domain.server}/event/find`
        const transport = axios.create({withCredentials: true})

        transport.get(tURL)
        .then((res)=> {
            setEventList(res.data)
            console.log(res.data)
        })
    },[])

    useEffect(()=>{
        setEventFocus(eventFocus)

        
             if(eventFocus){setGroup(eventList.find(event=>event.eventName ===eventFocus).members)}
             console.log('Dashboard group:', group)
        
        //if(eventFocus){setGroup(eventList.find(event=>event.eventName ==eventFocus).members)}
        //if(eventFocus){console.log('Dashboard group:',eventList.find(event=>event.eventName ==eventFocus).members)}
    }, [eventFocus, eventList, group])

    return (
        <div className="dashContainer">
            <DetailContainer 
            eventList={eventList} 
            eventFocus={eventFocus} 
            setEventFocus={setEventFocus}
            group={group}
            />
            <CalendarContainer eventFocus={eventFocus} />            
        </div>
    )
}
