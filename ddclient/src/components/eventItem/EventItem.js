import React from 'react'
import {Accordion, Card} from 'react-bootstrap'

export default function EventItem(props) {
    return (
        <Accordion.Collapse eventKey="0">
            <Card.Body><h4>{props.event.name}</h4></Card.Body>
        </Accordion.Collapse>
   
    )
}
