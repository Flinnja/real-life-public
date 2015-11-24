
import React, { Component } from 'react'
// var TeX = require('../../react-components/js/tex.jsx')
var PopUp = require('./popUp')


var HabitButton = require('./habit_button')


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
