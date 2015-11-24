

// var TeX = require('../../react-components/js/tex.jsx')
var PopUp = require('./popUp')

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
      .get('/habits/7')
      .end(function (err, res) {
        if (err) {
          console.log("componentWillMount error", err)
        } else {
          console.log("componentWillMount response: ", res)
        }
      })

    // this.setState({ habitButton: HabitButtonStatus})
  },


class HabitView extends Component {

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

      <div onClick={this.clickHandler}>
        {this.state.name}
        <HabitButton />
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
  }


})


module.exports = HabitView
