import React from 'react'
import moment from 'moment'

export default function renderDays(year, month, firstDayOfMonth, lastDayOfMonth, lastDateOfMonth, previousDate, eventFocus, data) {
    const startStyle = {
        width: "90%",
        height: ".5rem",
        backgroundColor: "blue"
    }

    const startBar = <div style={startStyle}></div>

    const selectedDates = [];
    const eventData = data?.find(eData => eData.eventName === eventFocus)

    eventData?.selectedDates?.forEach(member => {
        selectedDates.push({ email: member[0].email, startDate: member[0].startDate, endDate: member[0].endDate })
    })
    console.log("selectedDates:", selectedDates)

    const days = []
    const fDays = []

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push(<div className={`day p`} key={`${i}p`}>{previousDate - i}</div>)
    }

    for (let i = 1; i < lastDateOfMonth + 1; i++) {
        let day = moment(`${month + 1}-${i}-${year}`, "M-Do-YYYY").format("MMMM Do YYYY")
        let sDay = moment(selectedDates[0]?.startDate).format('MMMM Do YYYY');

        console.log('sDay', sDay)
        console.log('day', day)

        if (day === sDay) {
            days.push(<div className={`day ${i}`} key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid red" }}>{i}{startBar}</div>)
        } else {
            days.push(<div className={`day ${i}`} key={i}>{i}</div>)
        }
    }

    for (let i = 6 - lastDayOfMonth; i > 0; i--) {
        fDays.unshift(<div className={`day f`} key={`${i}f`}>{i}</div>)
        if (i === 1) { days.push(fDays) }
    }

    for (let i = 0; i < data.length; i++) {

    }

    return days;

}