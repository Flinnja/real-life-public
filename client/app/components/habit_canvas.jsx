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
        <img src={`assets/${task.status}.png`}/>
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
  }
})

module.exports = HabitCanvas
