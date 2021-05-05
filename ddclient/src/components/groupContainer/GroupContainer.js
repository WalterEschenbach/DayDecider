import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import GroupItem from '../groupItem/GroupItem'
import './groupcontainer.css'

export default function GroupContainer(props) {
    return (
        <React.Fragment>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="gContainer" style={{borderRadius: "10px", margin: "2px 0px"}}>
                <header className="title">
                    <h2>GROUP</h2>
                </header>
            </Accordion.Toggle>
            {props.group && props.group.map((member)=>(
                <GroupItem member={member} key={member[0]?.email}/>
            ))}
        </React.Fragment>
    )
}
