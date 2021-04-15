import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import './eventitem.css'

export default function EventItem(props) {

    return (
            <Accordion.Collapse onClick={props.onClick} key={props.event} className={props.className} eventKey="0" >
                <Card.Body><h4>{props.event.eventName}</h4></Card.Body>
            </Accordion.Collapse>
        
   
    )
}
