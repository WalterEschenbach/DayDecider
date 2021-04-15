import React, {useEffect, useState} from 'react'
import CalendarContainer from '../calendarContainer/CalendarContainer'
import DetailContainer from '../detailContainer/DetailContainer'
import axios from 'axios'
import Settings from '../../config/settings'

import './dashboard.css'

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [eventFocus, setEventFocus] = useState();
    const [group, setGroup] = useState([]);

    useEffect(()=>{
        const tURL = `${Settings.domain.server}/event/find`
        const transport = axios.create({withCredentials: true})

        transport.get(tURL)
        .then((res)=> {
            setData(res.data)
            console.log(res.data)
        })
    },[])

    useEffect(()=>{
        setEventFocus(eventFocus)
        console.log('eventFocus:', eventFocus)
    }, [eventFocus])

    useEffect(()=>{
        try{
            setGroup(data.find(event=>event.eventName ===eventFocus).members)
        } catch{
            console.log('Group Undefined at Dashboard')
        }
    }, [eventFocus, group, data])

    return (
        <div className="dashContainer">
            <DetailContainer 
            data={data} 
            eventFocus={eventFocus} 
            setEventFocus={setEventFocus}
            group={group}
            />
            <CalendarContainer eventFocus={eventFocus} />            
        </div>
    )
}
