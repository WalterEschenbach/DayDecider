import React, {useEffect, useState} from 'react'
import CalendarContainer from '../calendarContainer/CalendarContainer'
import DetailContainer from '../detailContainer/DetailContainer'
import MobileNav from '../nav/MobileNav'
import axios from 'axios'
import Settings from '../../config/settings'
import CalendarDetail from '../calendarDetail/CalendarDetail'
import CalendarDisplayComponent from '../calendarDisplayComponent/CalendarDisplayComponent'

import './dashboard.css'

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [eventFocus, setEventFocus] = useState();
    const [group, setGroup] = useState([]);
    const [navSelected, setNavSelected] = useState('detail-container')

    const w = window.innerWidth;

    useEffect(()=>{
        const tURL = `${Settings.domain.server}/event/find`
        const transport = axios.create({withCredentials: true})

        transport.get(tURL)
        .then((res)=> {
            setData(res.data)
        })
    },[])

    useEffect(()=>{
        setEventFocus(eventFocus)
    }, [eventFocus])

    useEffect(()=>{
        try{
            setGroup(data.find(event=>event.eventName ===eventFocus).members)
        } catch{
            console.log("Select an Event! ...")
        }
    }, [eventFocus, group, data])

    function navToggleSelected(e){
        e.preventDefault()
        setNavSelected(e.currentTarget.className)
        console.log('eValue:',e.currentTarget.className)
    }


    const dContainer = <DetailContainer 
                        data={data} 
                        eventFocus={eventFocus} 
                        setEventFocus={setEventFocus}
                        group={group}
                        />

    const cComponent = <CalendarDisplayComponent eventFocus={eventFocus} data={data} />
    const cDetails = <CalendarDetail eventFocus={eventFocus} data={data} />


    let mobileDisplay = <div>Hello World</div>;   

    switch(navSelected){
        case 'detail-container':{
            mobileDisplay = dContainer;
            break;
        }
        case 'calendar-container':{
            mobileDisplay = cComponent;
            break;
        }
        case 'calendar-detail':{
            mobileDisplay = cDetails;
            break;
        }
    }

    return (
        <div className="dashContainer">
            {w > 600 && dContainer}
            {w > 600 && <CalendarContainer eventFocus={eventFocus} data={data} />}
            {w <= 600 && <MobileNav navSelected={navSelected} navToggleSelected={navToggleSelected}/>}
            {w <=600 && mobileDisplay}       
        </div>
    )
}
