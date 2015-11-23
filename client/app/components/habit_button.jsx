import React from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'

var LayeredComponentMixin = require('../../react-components/js/layered-component-mixin.jsx')
var Modal = require('../../react-components/modal.js')


var HabitButton = React.createClass({
  mixins: [LayeredComponentMixin],

  getInitialState: function() {
    return { clicked: false };
  },

  render: function() {
    console.log('props in HabitButton', this.props)

      return <button onClick={this.handleClick}>
          Add new habit
      </button>;
  },
  renderLayer: function() {
    if (this.state.clicked) {
      return <Modal onClose={this.handleClose}>
        <div className="modal-header">
          Add new habit
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
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" id="description" />
            </div>
            <div>
              <label htmlFor="start-date">Start Date: </label>
              <input type="date" id="start-date" />
            </div>
            <div>
              <label htmlFor="end-date">End Date: </label>
              <input type="date" id="end-date" />
            </div>
            <div>
              <label htmlFor="frequency">Frequency: Every </label>
              <input type="integer" id="frequency" />
              <label htmlFor="frequency"> days</label>
            </div>
              <button onClick={this.handleFormButtonClick}>
                Submit
              </button>
          </form>

        </div>
      </Modal>;
    } else {
      return <div />;
    }
  },

  parseFormInput: function(e) {
    return {
      user_id: 1,
      name: e.target.parentNode[0].value,
      description: e.target.parentNode[1].value,
      start_date: e.target.parentNode[2].value,
      end_date: e.target.parentNode[3].value,
      frequency: e.target.parentNode[4].value
    }
  },

  handleFormButtonClick: function (e) {
    var self = this
    e.preventDefault()
    var formData = this.parseFormInput(e)
    request
      .post('/habits')
      .send(formData)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          alert("There is something wrong with your form, please try again")
        } else {
          console.log("posted successfully")
          // this.setState({ habits: res.habits })
          self.handleClose()
        }
      })

      this.props.onAddHabit('edit')


  },

  handleClose: function() {
      this.setState({ clicked: false });
  },

  handleClick: function() {
    this.props.onAddHabit('clicked')

    this.setState({ clicked: !this.state.clicked });
  }
})

module.exports = HabitButton
