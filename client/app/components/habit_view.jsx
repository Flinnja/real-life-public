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
        <div>
          { this.state.showImg ? img : null}
        </div>
      </div>
    )
  },

  clickHandler: function () {
    // var newState;

    // if (this.state.showImg === true) {
    //   newState = false
    // } else {
    //   newState = true
    // }


    this.setState({ showImg: !this.state.showImg })
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

})

module.exports = HabitView
