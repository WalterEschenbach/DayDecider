import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import CreateEvent from '../createEvent/CreateEvent'
import {FaRegCalendarPlus} from 'react-icons/fa'
import './eventcontainer.css'

// const url = `${Settings.domain.server}/event/find`;

export default function EventContainer() {
    const [modalShow, setModalShow] = useState(false)

    return (
        <React.Fragment>
            <div className="eContainer">
                <h2>EVENTS</h2>
                <Button className="create-event-btn" variant="secondary" onClick={()=>setModalShow(true)}><FaRegCalendarPlus/></Button>
            </div>
            <CreateEvent
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </React.Fragment>
     
    )
}
