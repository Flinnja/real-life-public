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

  // mixins: [LayeredComponentMixin],


  getInitialState: function() {
    return { modalOpen: false }
  },

  render: function() {
    console.log('render props in HabitButton', this.props, this.state)

    return (

      <div>
        <button onClick={this.handleClick}>
          Add New Habit
        </button>
        <Modal visible={this.state.modalOpen} style={customStyles}>
            <div className="modal-header">
              Add New Habit
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
                  <label htmlFor="end-date"> (optional)</label>
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
          </Modal>
      </div>

    )
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

getUserId: function() {
 return true
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
          console.log("Form Button Click Error: ", err)
        } else {
          console.log("Form posted successfully")

          // this.setState({ habits: res.habits })
          self.handleClose()
        }
      })

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
