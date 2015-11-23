import React from 'react'
import request from 'superagent'

var HabitButton = require('./habit_button')
var HabitNavHome = require('./habit_nav_home')
var HabitCanvas = require('./habit_canvas')
var HabitNavNeeds = require('./habit_nav_needs')
var HabitView = React.createClass({

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
          console.log("componentWillMount response: ", habits.length)
        }
      })

    // this.setState({ habitButton: HabitButtonStatus})
  },

  getInitialState: function () {
    return {
      name: 'Simon',
      showImg: false,
      habitButton: 'add'
    }
  },

  render: function () {
    var img = (<img src={this.props.image} />)

    console.log('props in HabitView', this.props)

    return(
      <div onClick={this.clickHandler}>
        {this.state.name}
        <HabitButton status={this.state.habitButton} onAddHabit={this.onAddHabit.bind(this)} />
        <HabitNavHome />
        <HabitCanvas />
        <HabitNavNeeds />
        <div>
          { this.state.showImg ? img : null}
        </div>
      </div>
    )
  },

  clickHandler: function () {
    this.setState({ showImg: !this.state.showImg })
  },

  onAddHabit: function (status) {
    console.log('status in HabitView', status)

    this.setState({ habitButton: status })
  }
})

module.exports = HabitView
