import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import GroupItem from '../groupItem/GroupItem'
import './groupcontainer.css'

export default function GroupContainer(props) {
    return (
        <React.Fragment>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="gContainer">
                <header className="title">
                    <h2>GROUP</h2>
                </header>
            </Accordion.Toggle>
            {props.group && props.group.map((member)=>(
                <GroupItem member={member}/>
            ))}
        </React.Fragment>
    )
}
