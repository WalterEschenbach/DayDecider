import React, {useState} from 'react'
import EventContainer from '../eventContainer/EventContainer'
import GroupContainer from '../groupContainer/GroupContainer'
import {Accordion, Card} from 'react-bootstrap'

import './detailcontainer.css'


export default function DetailContainer(props) {
    const [activeKey, setActiveKey] = useState("0")

    return (
        <div className="dContainer">
             <Accordion defaultActiveKey="0" activeKey={activeKey}>
                    <Card>
                        <EventContainer 
                        data={props.data} 
                        eventFocus={props.eventFocus} 
                        setEventFocus={props.setEventFocus}
                        setActiveKey={setActiveKey} 
                        activeKey={activeKey}/>
                    </Card>
                    <Card>
                        <GroupContainer group={props.group}/>
                    </Card>
                </Accordion>
            
            
        </div>
    )
}
