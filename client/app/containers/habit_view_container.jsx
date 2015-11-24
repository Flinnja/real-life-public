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
          console.log("componentWillMount error", err)
        } else {
          var habits = JSON.parse(res.text)
          console.log("componentWillMount response: ", habits)
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
    console.log('render HabitViewContainer state, props:', this.state, this.props)

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
    console.log('status in HabitView', status)

    this.setState({ habitButton: status })
  },

  resetHabitState: function (habit) {
    this.setState( { habit: habit } )
    console.log('resetHabitState', habit)
  }
})

module.exports = HabitViewContainer
