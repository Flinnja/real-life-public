import React from 'react'
import request from 'superagent'

import HabitView from '../components/habit_view'

var HabitViewContainer = React.createClass({

  componentWillMount: function () {
    // var HabitButtonStatus = this.props.habits.length > 0 ? 'edit' : 'add'
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
    // this.setState({ habitButton: HabitButtonStatus})
  },

  getInitialState: function () {
    return Object.assign({}, this.props, {
      name: 'Simon',
      showImg: false
    })
  },

  render: function () {
    return < HabitView
      { ...this.state}
      clickHandler={this.clickHandler}
      onAddHabit={this.onAddHabit}
      resetHabitState={this.resetHabitState} />
  },

  clickHandler: function () {
    this.setState({ showImg: !this.state.showImg })
  },

  onAddHabit: function (status) {
    this.setState({ habitButton: status })
  },

  resetHabitState: function (habit) {
    this.setState( { habit: habit } )
  }
})

module.exports = HabitViewContainer
