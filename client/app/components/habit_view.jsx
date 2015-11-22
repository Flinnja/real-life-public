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
  }

// React.render(<ButtonWithDialog />, domNode)

// require('./habit_view.css')

  // render() {
  //   return (
  //     <popUp>
  //       <ButtonWithDialog />
  //     </popUp>
  //   )
  // }

  // render() {
  //   return (
  //     <div className='test'>
  //       <p>Hello Sulu</p>
  //     </div>
  //   )
  // }

}

module.exports = HabitView
