import React, {useState} from 'react'
import axios from 'axios'
import validator from 'validator'
import {Container, Row, Col, Form, Button, InputGroup, Modal} from 'react-bootstrap'
import Settings from '../../config/settings'
import '../createEvent/createevent.css'

export default function CreateEvent(props) {
    const [name, setName] = useState("");
    const [emails, setEmails] = useState([]);
    const [email, setEmail] = useState(emails);
    const [route] = useState(`${Settings.domain.server}/event/create`);
    const [disable, setDisable] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidName, setInvalidName] = useState(false)
    const [eventCreated, setEventCreated] = useState(false)
    
    const handleNameChange = (e) =>{
        setName(e.target.value)
        if(name.length>0){
            setInvalidName(false)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleEnterKey = (e) =>{
        if(e.key==="Enter"&&disable===true){handleEmailSubmit(e)}
    }

    const handleEmailSubmit = (e) =>{
        e.preventDefault()      

        if(validator.isEmail(email)){   
            setEmails([...emails, email])
            console.log('Email submitted:', emails)
            setInvalidEmail(false)
            setEmail('')
        }else{
            console.log('error: please enter a valid email')
            setInvalidEmail(true)
        }  
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name.length>0){
            
            const event = {
                name,
                group: emails
            }
            
            const transport = axios.create({withCredentials: true})

            transport.post(route,event)
            .then(res => console.log('Response:', res))
            .catch(err => console.log(err))
            
            setEmails([])
            setEmail('')
            setName("")
            setEventCreated(true)
            setInvalidName(false)
        }else{
            setInvalidName(true)
            console.log('invalidName',invalidName)
        }
    }
    
    return (

        <Modal
        {...props}
        size="fit-content"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        <Container className="justify-content-md-center" >
            <Row>
                <Col >
                    <Form onSubmit={handleSubmit} className="create-event">
                        <Form.Label>Event Name:</Form.Label>
                        <Form.Control 
                        name="name" 
                        onChange={handleNameChange} 
                        value={name}
                        isInvalid={invalidName}
                        onFocus={()=>setEventCreated(false)}
                        disabled={disable}
                        placeholder="Event">
                        </Form.Control>
                        <br/>
                        <Form.Label>Add Group Members:</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                name="emails" 
                                onChange={handleEmailChange} 
                                onKeyPress={handleEnterKey}
                                onFocus={()=>{
                                    setEventCreated(false)
                                    setDisable(true)}} 
                                onBlur={()=>setDisable(false)} 
                                isInvalid={invalidEmail}
                                value={email}
                                placeholder="Email"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2" onClick={handleEmailSubmit}>+</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <br/>
                        <div className="groupContainer">
                            {emails.map((email)=>(<h5 key={email}>{email}</h5>))}
                        </div>
                        <Button className="btn-modal" variant="primary" type="submit" disabled={disable}>Submit</Button>
                        {eventCreated && (<h5 style={{color: "#17D500"}}>Event Created!</h5>)}
                    </Form>
                    <br/>
                </Col>
            </Row>
            
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-modal" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>





       
    )
}
