import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import CreateEvent from '../createEvent/CreateEvent'
import {FaRegCalendarPlus} from 'react-icons/fa'
import {Accordion, Card} from 'react-bootstrap'
import EventItem from '../eventItem/EventItem'
import './eventcontainer.css'


export default function EventContainer(props) {
    const [modalShow, setModalShow] = useState(false)

    const onClick = (index) => {
        props.setEventFocus(index.target.innerText);
        props.setActiveKey("1")
    }

 
    
    return (
        <React.Fragment>
            <Accordion.Toggle 
            as={Card.Header} 
            eventKey="0" 
            className="aToggle"
            onClick={()=>props.setActiveKey("0")}
            
            >
                <div className="eContainer">
                    <h2>EVENTS</h2>
                    <Button className="create-event-btn" variant="secondary" onClick={()=>setModalShow(true)}><FaRegCalendarPlus/></Button>
                </div>
                <CreateEvent
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </Accordion.Toggle>
            {props.data.map((event)=>{
                const className = props.eventFocus === event.eventName ? "media-active" : 'media';
                return(
                    <EventItem
                    onClick={onClick}
                    eventFocus={props.eventFocus}
                    className={className} 
                    event={event} 
                    key={event.eventName}
                    />
                    )})}
        </React.Fragment>
    )
}
