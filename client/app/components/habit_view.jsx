

// var TeX = require('../../react-components/js/tex.jsx')
var PopUp = require('./popUp')

import React from 'react'
import request from 'superagent'


var HabitButton = require('./habit_button')
var HabitCanvas = require('./habit_canvas')
var HabitNavHome = require('./habit_nav_home')
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

  render: function () {


  constructor(props) {
    super(props)
  }


  render(){
    return(

      <div>
        <PopUp />
        <PopUp />
        <PopUp />
        <PopUp />
      <div onClick={this.props.clickHandler}>
        {this.props.name}
        <HabitButton status={this.props.habitButton} onAddHabit={this.props.onAddHabit} />

        <HabitButton habit={this.props.habit} onAddHabit={this.props.onAddHabit} />
        <HabitCanvas tasks={this.props.tasks} />
        <HabitNavHome />
        <HabitNavNeeds />
        <div>
          { this.props.showImg ? img : null}
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
