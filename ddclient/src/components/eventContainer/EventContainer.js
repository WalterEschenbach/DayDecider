import React from 'react'
import {Button} from 'react-bootstrap'
import './eventcontainer.css'

// const url = "http://127.0.0.1:3030/event/find";

export default function EventContainer() {

    const eLink = "http://127.0.0.1:3000/event/create"


    return (
        <div className="eContainer">
            <header className="title">
                <h2>EVENTS</h2>
                <Button href={eLink}>+</Button>
            </header>
      
        </div>
    )
}
