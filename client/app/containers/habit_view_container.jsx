import React from 'react'
import request from 'superagent'

import HabitView from '../components/habit_view'

var HabitViewContainer = React.createClass({

  componentWillMount: function () {
    request
      .get('/habits')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) {
        } else {
          var habits = JSON.parse(res.text)
        }
      })
  },

  getInitialState: function () {
    return Object.assign({}, this.props, {
      name: ''
    })
  },

  render: function () {
    return < HabitView
      { ...this.state}
      onAddHabit={this.onAddHabit}
      resetHabitState={this.resetHabitState} />
  },

  onAddHabit: function (status) {
    this.setState({ habitButton: status })
  },

  resetHabitState: function (habit) {
    this.setState( { habit: habit } )
  }
})

module.exports = HabitViewContainer
