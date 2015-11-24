import React, { Component } from 'react'
// var TeX = require('../../react-components/js/tex.jsx')
var PopUp = require('./popUp')

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
      </div>
    )
  },

  clickHandler: function () {
    this.setState({ showImg: !this.state.showImg })
  }


})


module.exports = HabitView
