import React, {useState} from 'react'
import {FaListUl, FaRegCalendarAlt, FaArrowRight} from 'react-icons/fa'
import './mobilenav.css'

function MobileNav(props) {
    
    const icons = [
        {i: <FaListUl size="3em" className="fa-icon" />, c: "detail-container"},
        {i: <FaRegCalendarAlt size="3em" className="fa-icon" />, c: "calendar-container"},
        {i: <FaArrowRight size="3em" className="fa-icon" />, c: "calendar-detail"},
    ]


   


    
    return (
        <div className="mobile-container">
            {icons.map(icon=>{
                let active = props.navSelected === icon.c ? `${icon.c} active` : `${icon.c}`
                return(
                <button className={active} onClick={props.navToggleSelected}>
                    <div className="circle">
                        {icon.i}    
                    </div>
                </button>
            )})}
        </div>
    )
}

export default MobileNav
