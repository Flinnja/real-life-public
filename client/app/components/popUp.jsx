import React from 'react'
var LayeredComponentMixin = require('../../react-components/js/layered-component-mixin.jsx')
var Modal = require('../../react-components/modal.js')


var PopUp = React.createClass({
  mixins: [LayeredComponentMixin],

  getInitialState: function() {
    return { clicked: false };
  },

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
}

  // }}}
});

module.exports = PopUp
