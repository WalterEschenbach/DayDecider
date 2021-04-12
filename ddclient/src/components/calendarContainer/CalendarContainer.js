import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Settings from '../../config/settings'
import CalendarComponent from '../calendarComponent/CalendarComponent'
import Account from '../auth/account/Account'
import './calendarcontainer.css'

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
            <div className="cTitle"><h1>DAYDECIDER</h1></div>
                <Account/>
                <CalendarComponent/>
            <footer><button onClick={onClick}>Test Logout</button></footer>
        </div>
    )
}
