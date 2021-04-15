import React, {useState, useEffect} from 'react'
import EventContainer from '../eventContainer/EventContainer'
import GroupContainer from '../groupContainer/GroupContainer'
import {Accordion, Card} from 'react-bootstrap'
import EventItem from '../eventItem/EventItem'

import './detailcontainer.css'


export default function DetailContainer(props) {
    const [eventList, setEventList] = useState(props.eventList)
    const [eventFocus, setEventFocus] = useState(props.eventFocus)
    const [activeKey, setActiveKey] = useState("0")
    
    console.log('DetailContainer props.group:', props.group)

    useEffect(()=>{
        setEventList(props.eventList)
        props.setEventFocus(eventFocus)
    }, [props.eventList, props.eventFocus, props, eventFocus])

    const onClick = (index) => {
        setEventFocus(index.target.innerText);
        setActiveKey("1")
    }

    return (
        <div className="dContainer">
             <Accordion defaultActiveKey="0" activeKey={activeKey}>
                    <Card >
                        <Accordion.Toggle 
                        as={Card.Header} 
                        eventKey="0" 
                        className="aToggle"
                        onClick={()=>setActiveKey("0")}
                        style={{backgroundColor: "#17252A", color: "#FEFFFF"}}
                        >
                            <EventContainer/>
                        </Accordion.Toggle>
                        {eventList.map((event)=>{
                        const className = eventFocus === event.eventName ? "media-active" : 'media';
                        return(
                                <EventItem
                                onClick={onClick}
                                eventFocus={eventFocus}
                                className={className} 
                                event={event} 
                                key={event.name}
                                />
                            )})}
                    </Card>
                    <Card>
                        
                            <GroupContainer group={props.group}/>
                        
                       
                    </Card>
                </Accordion>
            
            
        </div>
    )
}
