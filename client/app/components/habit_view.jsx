import {Calendar} from 'react-calendar-component'
import moment from 'moment'
import React, { Component } from 'react'

require('./habit_view.css')

class HabitView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }
  }

  render() {

    return (
      <div className='test'>
        <p>Hello Simon</p>
        <Calendar
          date={this.state.date}
          onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
          onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
          onPickDate={(date) => console.log(date)}
         />
      </div>
    )
  }
}

module.exports = HabitView
