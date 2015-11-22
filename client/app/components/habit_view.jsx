import React from 'react'

var HabitButton = require('./habit_button')
var HabitNavHome = require('./habit_nav_home')
var HabitCanvas = require('./habit_canvas')
var HabitNavNeeds = require('./habit_nav_needs')


var HabitView = React.createClass({

  getInitialState: function () {
    return {
      name: 'Simon',
      showImg: false
    }
  },

  render: function () {
    var img = (<img src={this.props.image} />)

    return(
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

//   getInitialState: function () {
//     return {
//       true
//     }
//   },

//   render: function(){
//     return (
//       <div>
//         <p>Hello</p>
//         <PopUp />
//       </div>
//     )
//   }
})

module.exports = HabitView
