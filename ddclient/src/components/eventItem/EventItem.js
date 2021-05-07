import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import './eventitem.css'

export default function EventItem(props) {

    return (
            <Accordion.Collapse onClick={props.onClick} key={props.event} className={props.className} eventKey="0" >
                <Card.Body><h4 style={{textShadow: "2px 2px 4px #b9b9b9"}}>{props.event.eventName}</h4></Card.Body>
            </Accordion.Collapse>
        
   
    )
}
