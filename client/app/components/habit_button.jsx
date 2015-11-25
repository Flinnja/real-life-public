import React from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'

var LayeredComponentMixin = require('react-layer-mixin')
var Modal = require('react-awesome-modal')


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

var HabitButton = React.createClass({


  getInitialState: function() {
    return { modalOpen: false }
  },

  render: function() {
    return (
      <div>
        <button onClick={this.handleClick}>
          { this.getButtonTitle() }
        </button>
        <Modal visible={this.state.modalOpen} style={customStyles}>
          <div className="modal-header">
            { this.getButtonTitle() }
            <a href="javascript: void 0;"
             style={{float: "right", textDecoration: "none"}}
             onClick={this.handleClose}>
              &#215;
            </a>
          </div>
          <div className="modal-body">
            <form>
              <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" defaultValue={this.getHabitProps().name} />
              </div>
              <div>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" defaultValue={this.getHabitProps().description} />
              </div>
              <div>
                <label htmlFor="start-date">Start Date: </label>
                <input type="date" id="start-date" defaultValue={this.getHabitProps().start_date} />
              </div>
              <div>
                <label htmlFor="end-date">End Date: </label>
                <input type="date" id="end-date" defaultValue={this.getHabitProps().end_date} />
                <label htmlFor="end-date"> (optional)</label>
              </div>
              <div>
                <label htmlFor="frequency">Frequency: Every </label>
                <input type="integer" id="frequency" defaultValue={this.getHabitProps().frequency} />
                <label htmlFor="frequency"> days</label>
              </div>
              <button onClick={this.handleFormButtonClick}>
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    )
  },

  getHabitProps: function () {
    var HabitProps = {}
    if (this.props.habit) {
      HabitProps = {
        name: this.props.habit.name,
        description: this.props.habit.description,
        start_date: this.props.habit.start_date,
        end_date: this.props.habit.end_date,
        frequency: this.props.habit.frequency
      }
    }
    return HabitProps
    // return this.props.habit ? this.props.habit.name : undefined
  },

  parseFormInput: function(e) {
    return {
      name: e.target.parentNode[0].value,
      description: e.target.parentNode[1].value,
      start_date: e.target.parentNode[2].value,
      end_date: e.target.parentNode[3].value,
      frequency: e.target.parentNode[4].value
    }
  },

  getButtonTitle: function () {
    return this.props.habit ?
      "Edit Your Habit" : "Add New Habit"
  },

  handleFormButtonClick: function (e) {
    var self = this
    e.preventDefault()
    var formData = this.parseFormInput(e)

    if (this.props.habit) {
      request
        .patch('/habits/' + this.props.habit.id)
        .send(formData)
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
          } else {
            var habit = JSON.parse(res.text)
            self.props.resetHabitState(habit)
            self.handleClose()
          }
        })
    } else {
      request
        .post('/habits')
        .send(formData)
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
          } else {
            var habit = JSON.parse(res.text)
            self.props.resetHabitState(habit)
            self.handleClose()
          }
        })
    }


    this.props.onAddHabit('edit')

  },

  handleClose: function() {
    this.setState({ modalOpen: false })
  },

  handleClick: function() {
    this.props.onAddHabit('clicked')
    this.setState({ modalOpen: true })
  }

})

module.exports = HabitButton
