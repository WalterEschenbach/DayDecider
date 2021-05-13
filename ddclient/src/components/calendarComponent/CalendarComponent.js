import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import moment from 'moment'
import renderDays from '../../utils/renderDays'
import './calendarcomponent.css'


function CalendarComponent(props) {
    //const [localeDate, setLocaleDate] = useState(new Date().toLocaleDateString())
    //const [date] = useState(new Date().getDate())
    //const [day] = useState(new Date().getDay())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(year, month, 1).getDay())
    const [lastDayOfMonth, setLastDayOfMonth] = useState(new Date(year, month + 1, 0).getDay())
    const [lastDateOfCurrentMonth, setLastDateOfMonth] = useState(new Date(year, month + 1, 0).getDate())
    const [lastDateOfPreviousMonth, setLastDateOfPreviousMonth] = useState(new Date(year, month, 0).getDate())

    useEffect(() => {
        if (month < 0) { setMonth(11) }
        if (month > 11) { setMonth(0) }
        setFirstDayOfMonth(new Date(year, month, 1).getDay())
        setLastDayOfMonth(new Date(year, month + 1, 0).getDay())
        setLastDateOfMonth(new Date(year, month + 1, 0).getDate())
        setLastDateOfPreviousMonth(new Date(year, month, 0).getDate())

    }, [month, year, props.eventFocus])

    const days = renderDays(year, month, firstDayOfMonth, lastDayOfMonth, lastDateOfCurrentMonth, lastDateOfPreviousMonth, props.eventFocus, props.data, props.color);

    function previousMonth() {
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
        }
        setMonth(month - 1)
    }

    const futureMonth = () => {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        }
        else { setMonth(month + 1) }
    }

    return (
        <div className="calendarContainer" >
            <div className="month">
                <FaChevronLeft className="arrow" onClick={previousMonth} size="2rem" />
                <h2>{`${moment(`${month + 1}`, "M").format("MMMM")}, ${moment(`${year}`, "Y").format("YYYY")}`}</h2>
                <FaChevronRight className="arrow" onClick={futureMonth} size="2rem" />
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
