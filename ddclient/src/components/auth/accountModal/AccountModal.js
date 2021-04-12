import React from 'react';
import {useHistory} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import Settings from '../../../config/settings';

import './accountmodal.css';

export default function AccountModal(props) {
  let history = useHistory()

  const onClick = () => {
      const transport = axios.create({withCredentials: true});
      const tLink = `${Settings.domain.server}/auth/logout`;
      
      transport.get(tLink)
          .then(res => {
              console.log(res);
              history.push(`/login`);
          })
          .catch(err => console.log(err));
  };


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="aModalTitle" id="contained-modal-title-vcenter">
            Account Settings
            <button onClick={onClick}><h4><u>Logout</u></h4></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}
