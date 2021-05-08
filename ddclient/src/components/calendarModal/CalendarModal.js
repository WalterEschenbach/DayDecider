import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CalendarSelectComponent from '../calendarSelectComponent/CalendarSelectComponent'
import './calendarmodal.css'

export default function CalendarModal(props) {
    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);

    return (
        <div className="calendar-modal">
            <Button variant="outline-secondary" onClick={handleShow}>
                Select Dates
            </Button>

            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Dates</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CalendarSelectComponent 
                    setStartDate={props.setStartDate}
                    setEndDate={props.setEndDate}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
