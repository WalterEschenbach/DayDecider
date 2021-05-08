import React, { useState, useEffect } from 'react'
import CalendarModal from '../calendarModal/CalendarModal'
import Draggable from 'react-draggable'
import axios from 'axios'
import Settings from '../../config/settings'
import moment from 'moment'

import './calendardetail.css'

function CalendarDetail(props) {
    const [eventFocus, setEventFocus] = useState(props.eventFocus);
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [show, setShow] = useState(false);

    useEffect(() => {
        setEventFocus(props.eventFocus)
    }, [props.eventFocus])

    useEffect(() => {
        const eventDates = props.data.find(event => event.eventName === eventFocus)
        setStartDate(eventDates?.startDate[0][0]?.startDate)
        setEndDate(eventDates?.startDate[0][0]?.endDate)
    }, [eventFocus, props.data])

    function handleSave() {
        const route = `${Settings.domain.server}/event/update`
        const body = {
            startDate,
            endDate,
            eventFocus
        }

        const transport = axios.create({ withCredentials: true })
        transport.post(route, body)
            .then(res => {
                console.log('response:', res)
                setStartDate(res.data.startDate)
                setEndDate(res.data.endDate)
            })
            .catch(err => console.log('err:', err))
        setShow(false)
    }

    const styles = {
        position: "absolute",
        width: "fit-content",
        height: "fit-content",
        zIndex: "2",
        right: "25px",
        bottom: "25px"
    }

    return (
        <Draggable >
            <div style={styles} >
                <div className="cdContainer">
                    <h1>{eventFocus}</h1>
                    <CalendarModal
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        startDate={startDate}
                        endDate={endDate}
                        handleSave={handleSave}
                        show={show}
                        setShow={setShow}
                    />
                    <br />
                    <h3>{`Start Date: ${startDate ? moment(startDate).format('MMMM Do YYYY') : ""}`}</h3>
                    <h3>{`End Date: ${endDate ? moment(endDate).format('MMMM Do YYYY') : ""}`}</h3>
                </div>
            </div>
        </Draggable>
    )
}

export default CalendarDetail
