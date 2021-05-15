import React from 'react'
import moment from 'moment'
import Bar from '../components/bar/Bar'

function renderDays(year, month, firstDayOfMonth, lastDayOfMonth, lastDateOfCurrentMonth, lastDateOfPreviousMonth, eventFocus, data) {
    const days = []
    const fDays = []
    const rDays = []
    const selectedDates = [];
    const colors = ["blue", "red", "green", "aqua"]
   
    const eventData = data?.find(eData => eData.eventName === eventFocus)

    eventData?.selectedDates[0]?.forEach((member, index) => {
        selectedDates.push({ email: member.email, startDate: member.startDate, endDate: member.endDate, duration: member.duration, color: colors[index] })

    })

    //render days prior to the first of the month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push({date: lastDateOfPreviousMonth - i, fullDate:moment(`${month}-${lastDateOfPreviousMonth - i}-${year}`, "MM-DD-YYYY").format("MMMM Do YYYY"), pcf: "p", bars:[]})
    }

    //render days for the current month
    for (let i = 1; i < lastDateOfCurrentMonth + 1; i++) {
            days.push({date: i, fullDate:moment(`${month+1}-${i}-${year}`, "MM-DD-YYYY").format("MMMM Do YYYY"), pcf: "c", bars: []})
    }

    //render days for next month
    for (let i = 6 - lastDayOfMonth; i > 0; i--) {
        fDays.unshift({date: i, fullDate:moment(`${month+2}-${i}-${year}`, "MM-DD-YYYY").format("MMMM Do YYYY"), pcf: "f", bars:[]})
        if (i === 1) { fDays.forEach(day=> days.push(day)) }
    }

    //console.log(days)

    

    if(days[0]) {
        selectedDates.forEach(member=>{
            for(let i = 0; i<days.length; i++){
                if(moment(member.startDate, "YYYY-MM-DD").format("MMMM Do YYYY") === days[i].fullDate) {
                    for(let j = member.duration; j>0;j--){
                        days[i].bars.push(member.color)
                        i++
                    }
                }
            }
        })
       
        days.forEach(day=> {
            if(day.bars[0]){
                let bars = []
                day.bars.forEach((b, index)=> {
                    bars.push(<Bar color={b} key={index}/>)
                })
                rDays.push(
                    <div className={`day ${day.pcf}`} key={`${day.date}${day.pcf}`}>
                        <h5>{day.date}</h5> 
                        {bars}
                    </div>)
            }else{
                rDays.push(<div className={`day ${day.pcf}`} key={`${day.date}${day.pcf}`}>{day.date}</div>)
            }
        })
    }

    return rDays;
}

export default renderDays;


