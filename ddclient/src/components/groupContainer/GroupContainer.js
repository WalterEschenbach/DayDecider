import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import './groupcontainer.css'

export default function GroupContainer() {
    return (
        <Accordion.Toggle as={Card.Header} eventKey="1" className="gContainer">
            <header className="title">
                <h2>GROUP</h2>
            </header>
        </Accordion.Toggle>
    )
}
