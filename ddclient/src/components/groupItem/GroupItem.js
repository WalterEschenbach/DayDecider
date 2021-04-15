import React from 'react'
import {Accordion, Card} from 'react-bootstrap'

export default function GroupItem(props) {
  
    return (
            <Accordion.Collapse 
            key={props.member} 
            eventKey="1" 
            style={{backgroundColor: "#e0dfcc"}} 
            >
                <Card.Body><h6>{props.member && props.member}</h6></Card.Body>
            </Accordion.Collapse>
    )
}
