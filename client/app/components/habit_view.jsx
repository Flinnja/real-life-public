import React from 'react'

var HabitButton = require('./habit_button')
var HabitNavHome = require('./habit_nav_home')
var HabitCanvas = require('./habit_canvas')
var HabitNavNeeds = require('./habit_nav_needs')


var HabitView = React.createClass({

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
  },

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
