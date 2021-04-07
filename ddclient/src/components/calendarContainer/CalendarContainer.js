import React from 'react'
import Calendar from 'react-calendar'
import axios from 'axios'
import './calendarcontainer.css'
import 'react-calendar/dist/Calendar.css'

const onChange = (value) =>{
    console.log(value)
}

const event = {
    name: "test"
}

const onClick = () => {
    axios.post('http://localhost:3030/event/create', event)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}


export default function CalendarContainer() {
    return (
        <div className="cContainer">
            <div className="title"><h1>DAYDECIDER</h1></div>
            <Calendar onChange={onChange} selectRange={true} returnValue="range" allowPartialRange={false} defaultView="month" className="calendar"/>
            <footer><button onClick={onClick}>Test Mongoose</button></footer>
        </div>
    )
}
