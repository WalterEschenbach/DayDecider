import React from 'react'
import {useHistory} from 'react-router-dom'
import Calendar from 'react-calendar'
import axios from 'axios'
import Settings from '../../config/settings'
import './calendarcontainer.css'
import 'react-calendar/dist/Calendar.css'

const onChange = (value) =>{
    console.log(value)
}

export default function CalendarContainer() {
    const history = useHistory()

    const onClick = () => {
        const transport = axios.create({withCredentials: true})
        const tLink = `${Settings.domain.server}/auth/logout`
        
        transport.get(tLink)
            .then(res => {
                console.log(res)
                history.push('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="cContainer">
            <div className="title"><h1>DAYDECIDER</h1></div>
            <Calendar onChange={onChange} selectRange={true} returnValue="range" allowPartialRange={false} defaultView="month" className="calendar"/>
            <footer><button onClick={onClick}>Test Logout</button></footer>
        </div>
    )
}
