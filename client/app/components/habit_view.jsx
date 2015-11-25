import React from 'react'
import request from 'superagent'

var HabitButton = require('./habit_button')
var HabitCanvas = require('./habit_canvas')

var HabitView = React.createClass({
  render: function () {
    var tasks = this.props.tasks || []

    return(
      <div className="feature_box">
        <HabitButton habit={this.props.habit} onAddHabit={this.props.onAddHabit} resetHabitState={this.props.resetHabitState} />
        <div id="habitCanvas">
          <HabitCanvas tasks={tasks} />
        </div>
      </div>
    )
  }
})

module.exports = HabitView
