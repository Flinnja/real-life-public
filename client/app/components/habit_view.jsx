import React from 'react'
import request from 'superagent'

var HabitButton = require('./habit_button')
var HabitCanvas = require('./habit_canvas')
var HabitNavHome = require('./habit_nav_home')
var HabitNavNeeds = require('./habit_nav_needs')

var HabitView = React.createClass({
  render: function () {
    var img = (<img src={this.props.image} />)
    var tasks = this.props.tasks || []

    return(
      <div className="feature_box">
        <div onClick={this.props.clickHandler}>
          {this.props.name}
          <HabitButton habit={this.props.habit} onAddHabit={this.props.onAddHabit} resetHabitState={this.props.resetHabitState} />
          <div id="habitCanvas">
            <HabitCanvas tasks={tasks} />
          </div>
          <div>
            { this.props.showImg ? img : null}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = HabitView
