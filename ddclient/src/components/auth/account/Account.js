import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {FaAngleDown} from 'react-icons/fa'
import AccountModal from '../accountModal/AccountModal'
import './account.css'

export default function Account(props) {
    const [name, setName] = useState(window.location.search.substring(1));
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
        setName(window.location.search.substring(1))
    },[]);


    return (
        <React.Fragment>
                <Button className="account-btn" variant="outline-primary" onClick={()=>setModalShow(true)}>
                    <FaAngleDown style={{margin: "0px 7px"}}/>
                    <div className="name"><h3>{name}</h3></div>
                    <img alt="MJ_Profile" src="./michael_jordan.jpg" className="profile-pic">{props.pic}</img>
                </Button> 
                       
                <AccountModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </React.Fragment>
     
    )
}
