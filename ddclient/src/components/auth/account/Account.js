import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'
import {Button} from 'react-bootstrap'
import {FaAngleDown} from 'react-icons/fa'
import AccountModal from '../accountModal/AccountModal'
import './account.css'


export default function Account(props) {
    const {search} = useLocation();
    const {email, picture} = queryString.parse(search)
    const [name, setName] = useState(email);
    const [pic, setPic] = useState(picture);
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
        setName(email)
        setPic(picture)
    },[name, pic]);


    return (
        <React.Fragment>
                <Button className="account-btn" variant="outline-primary" onClick={()=>setModalShow(true)}>
                    <FaAngleDown style={{margin: "0px 7px"}}/>
                    <div className="name"><h3>{name}</h3></div>
                    <img alt="MJ_Profile" src={pic} className="profile-pic">{props.pic}</img>
                </Button> 
                       
                <AccountModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </React.Fragment>
     
    )
}
