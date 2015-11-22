import React from 'react'

var LayeredComponentMixin = require('../../react-components/js/layered-component-mixin.jsx')
var Modal = require('../../react-components/modal.js')


var HabitButton = React.createClass({
  mixins: [LayeredComponentMixin],

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
                <form action="/my-form-place" method="post">
                  <div>
                      <label for="name">Name:</label>
                      <input type="text" id="name" />
                  </div>
                  <div>
                      <label for="description">Description:</label>
                      <input type="text" id="description" />
                  </div>
                  <div>
                      <label for="start-date">Start Date:</label>
                      <input type="date" id="start-date" />
                  </div>

                </form>

              </div>
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
}

  // }}}
});

module.exports = HabitButton
