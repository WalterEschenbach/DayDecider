import React, {useState, useEffect} from 'react'
import EventContainer from '../eventContainer/EventContainer'
import GroupContainer from '../groupContainer/GroupContainer'
import {Accordion, Card} from 'react-bootstrap'
import EventItem from '../eventItem/EventItem'

import './detailcontainer.css'


export default function DetailContainer(props) {
    const [events, setEvents] = useState(props.events)
    
    useEffect(()=>{
        setEvents(props.events)
    }, [props.events])

    return (
        <div className="dContainer">
             <Accordion defaultActiveKey="0">
                    <Card >
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="aToggle">
                            <EventContainer/>
                        </Accordion.Toggle>
                            {events.map((event)=>(<EventItem key={event.name} event={event} /> ))}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <GroupContainer/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            
            
        </div>
    )
}
