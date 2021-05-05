import React, {useState, useEffect} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './calendarcomponent.css'


function CalendarComponent() {
    const [localeDate, setLocaleDate] = useState(new Date().toLocaleDateString())
    const [date] = useState(new Date().getDate())
    const [day] = useState(new Date().getDay())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date(). getFullYear())
    const [firstDayOfMonth] = useState(new Date(year, month, 1).getDay())
    const [lastDayOfMonth] = useState(new Date(year, month +1, 0).getDay())
    const [lastDateOfMonth] = useState(new Date(year, month +1, 0).getDate())
    const [pDate] = useState(new Date(year, month, 0).getDate())

    
    // useEffect(()=>{
    //     console.log(month)
    // }, [month])


   

    console.log("Locale Date:",localeDate)
    console.log('Date:', date)
    console.log('Day:', day)
    console.log('Month:', month)
    console.log('First Day of Month:', firstDayOfMonth)
    console.log("Last Day of Month:", lastDayOfMonth)
    console.log("Last Date of Month:", lastDateOfMonth)





    const days = []
    const fDays = []

    for(let i=firstDayOfMonth-1; i>=0; i--){
        days.push(<div className={`day p`} key={`${i}p`}>{pDate-i}</div>)
    }

    for(let i=1; i<lastDateOfMonth+1;i++){
        days.push(<div className={`day ${i}`} key={i}>{i}</div>)
    }

    for(let i=6-lastDayOfMonth; i>0; i--){
        fDays.unshift(<div className={`day f`} key={`${i}f`}>{i}</div>)
        if(i===1){days.push(fDays)} 
    }

    function pMonth() {
        console.log("PREVIOUS")
    }

    const nMonth = () => {
        console.log("NEXT")
    }

    return (
        <div className="calendarContainer" >
            <div className="month">
                <FaChevronLeft className="arrow" onClick={pMonth}/>
                {localeDate}
                <FaChevronRight className="arrow" onClick={nMonth}/>
            </div>
            <div className="weekdays">
                <div className="weekday">Sun</div>
                <div className="weekday">Mon</div>
                <div className="weekday">Tues</div>
                <div className="weekday">Wed</div>
                <div className="weekday">Thurs</div>
                <div className="weekday">Fri</div>
                <div className="weekday">Sat</div>
            </div>
            <div className="days">
                {days}
            </div>
        </div>
    )
}

export default CalendarComponent
