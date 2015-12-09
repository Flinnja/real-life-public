import React from 'react'

var HabitCanvas = React.createClass({

  render: function() {
    var tasksGrid = this.getTasksGrid()

    var canvasStyle = {
      height: '100%',
      width: '100%',
      paddingLeft: '20px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'

    }

    return (
      <div style={canvasStyle}>
        { tasksGrid.map(this.renderTower) }
      </div>
    )
  },

  getTasksGrid: function () {
    var tasksGrid = []
    var towerArray = []

    this.props.tasks.forEach(function (task) {
      if (task.status == 'p') {
        towerArray.push(task)
      } else if (task.status == 'y') {
        towerArray.push(task)
      } else if (task.status == 'n') {
        towerArray.push(task)
        tasksGrid.push(towerArray)
        towerArray = []
      }
    })
    tasksGrid.push(towerArray)
    return tasksGrid
  },

  renderTower: function (tasks) {

    var towerStyle = {
      display: 'flex',
      flexDirection: 'column-reverse',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }

    return (
      <div style={towerStyle}>
        { tasks.map(this.renderBlock) }
      </div>
    )
  },

  renderBlock: function (task) {
    return (
      <div className="block">
        <img onClick={this.blockToggle(task)} src={`assets/${task.status}.png`}/>
      </div>
    )
  },

  blockToggle: function (task) {
    return function(e) {
      if (task.status == 'p') {
        task.status = 'y'
      } else if (task.status == 'y') {
        task.status = 'n'
      } else if (task.status ='n') {
        task.status = 'p'
      }
    }
  }
})

module.exports = HabitCanvas
