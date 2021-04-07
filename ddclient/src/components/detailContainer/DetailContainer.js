import React from 'react'
import EventContainer from '../eventContainer/EventContainer'
import GroupContainer from '../groupContainer/GroupContainer'
import {Accordion, Card} from 'react-bootstrap'

import './detailcontainer.css'


export default function DetailContainer() {
    return (
        <div className="dContainer">
             <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <EventContainer/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
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
