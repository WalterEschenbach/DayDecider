import React from 'react'
import {Button} from 'react-bootstrap'
import Settings from '../../config/settings'
import './eventcontainer.css'

// const url = `${Settings.domain.server}/event/find`;

export default function EventContainer() {

    const eLink = `${Settings.domain.client}/event/create`


    return (
        <div className="eContainer">
            <header className="title">
                <h2>EVENTS</h2>
                <Button href={eLink}>+</Button>
            </header>
      
        </div>
    )
}
