import React from 'react'
import request from 'superagent'

var HabitButton = require('./habit_button')
var HabitCanvas = require('./habit_canvas')
var HabitNavHome = require('./habit_nav_home')
var HabitNavNeeds = require('./habit_nav_needs')

var HabitView = React.createClass({
  render: function () {
    var img = (<img src={this.props.image} />)

    console.log('props in HabitView', this.props)

    return(
      <div onClick={this.props.clickHandler}>
        {this.props.name}
        <HabitButton habit={this.props.habit} onAddHabit={this.props.onAddHabit} />
        <HabitCanvas />
        <HabitNavHome />
        <HabitNavNeeds />
        <div>
          { this.props.showImg ? img : null}
        </div>
      </div>
    )
  }
})

module.exports = HabitView
