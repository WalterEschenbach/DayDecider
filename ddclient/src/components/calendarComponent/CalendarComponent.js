import React, {Component} from 'react'
import { DateRangePicker } from 'react-dates';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


export default class CalendarComponent extends Component {
    state = {
        startDate : null,
        endDate : null,
        focusedInput : null
    }
       
    

    render() {
        console.log('Start Date:', this.state.startDate?._d.toLocaleDateString())
        console.log('End Date:', this.state.endDate?._d.toLocaleDateString())
        return (
            <div>
                 <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.setEndDate({endDate })
                        this.props.setStartDate({startDate })
                        this.setState({startDate})
                        this.setState({endDate})

                    }} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    orientation="vertical"
                />

            </div>
        )
    }
}


