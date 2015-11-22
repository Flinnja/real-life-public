import React from 'react'

var PopUp = require('./popUp')

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
        <PopUp />
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
