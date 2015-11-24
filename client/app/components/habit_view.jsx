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

      </div>
    )
  }
}

module.exports = HabitView
