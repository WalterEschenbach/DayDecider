import React from 'react'
import {Accordion, Card} from 'react-bootstrap'

export default function GroupItem(props) {
  
    return (
            <Accordion.Collapse 
            key={props.member} 
            eventKey="1" 
            style={{backgroundColor: "#f8f7e8", cursor: "pointer"}} 
            >
                <Card.Body><h6>{props.member && props.member[0].email}</h6></Card.Body>
            </Accordion.Collapse>
    )
}
