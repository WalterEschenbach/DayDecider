import React, { useEffect, useState, useContext } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import AccountModal from '../accountModal/AccountModal'
import UserProvider from '../UserProvider'
import './account.css'


export default function Account(props) {
    const [modalShow, setModalShow] = useState(false);

    const data = useContext(UserProvider.context)
    

    useEffect(() => {
    }, [data]);

    

    return (
        <React.Fragment>
            <button className="account-btn" variant="outline-primary" onClick={() => setModalShow(true)}>
                <FaAngleDown className="aIcon" />
                <div className="name"><h3>{data?.data?.email}</h3></div>
                <img alt="MJ_Profile" src={data?.data?.picture} className="profile-pic"/>
            </button>

            <AccountModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </React.Fragment>

    )
}
