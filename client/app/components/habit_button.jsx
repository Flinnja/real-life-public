import React from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'

var LayeredComponentMixin = require('../../react-components/js/layered-component-mixin.jsx')
var Modal = require('../../react-components/modal.js')


var HabitButton = React.createClass({
  mixins: [LayeredComponentMixin],
    render: function() {
        return <button onClick={this.handleClick}>
            Click Me!
        </button>;
    },
    renderLayer: function() {
        if (this.state.clicked) {
            return <Modal onClose={this.handleClose}>
                <div className="modal-header">
                    Header
                    <a href="javascript: void 0;"
                       style={{float: "right", textDecoration: "none"}}
                       onClick={this.handleClose}>
                        &#215;
                    </a>
                </div>
                <div className="modal-body">Body!</div>
            </Modal>;
        } else {
            return <div />;
        }
    },
    // {{{
    handleClose: function() {
        this.setState({ clicked: false });
    },
  handleClick: function() {
    this.setState({ clicked: !this.state.clicked });
  },
  getInitialState: function() {
    return { clicked: false };
  },

  render: function() {
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
              <label htmlfor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlfor="description">Description:</label>
              <input type="text" id="description" />
            </div>
            <div>
              <label htmlfor="start-date">Start Date:</label>
              <input type="date" id="start-date" />
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
      name: e.target.parentNode[0].value,
      description: e.target.parentNode[1].value,
      startDate: e.target.parentNode[2].value
    }
  },

  handleFormButtonClick: function (e) {
    var self = this
    e.preventDefault()
    var formData = this.parseFormInput(e)
    request
      .post('/to-a-place')
      .send(formData)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          console.log("error", err)
          // check to see what kind of error
          // pop up to user with how to fix it
        } else {
          console.log("posted successfully", res)
          // close the modal
          self.handleClose()
        }
      })
  },

  handleClose: function() {
      this.setState({ clicked: false });
  },

  handleClick: function() {
    this.setState({ clicked: !this.state.clicked });
  }
})

module.exports = HabitButton
