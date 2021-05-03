import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CalendarComponent from '../calendarComponent/CalendarComponent'

export default function CalendarModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="calendar-modal">
            <Button variant="outline-secondary" onClick={handleShow}>
                Select Dates
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Dates</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CalendarComponent 
                    setStartDate={props.setStartDate}
                    setEndDate={props.setEndDate}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
