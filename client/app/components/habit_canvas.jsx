import React from 'react'

var HabitCanvas = React.createClass({
  render: function() {
    var tasksGrid = this.getTasksGrid()

    console.log("tasksGrid", tasksGrid)

    var canvasStyle = {
      height: '100%',
      width: '100%',
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

    return <div style={towerStyle}>
      { tasks.map(this.renderBlock) }
    </div>
  },

  renderBlock: function (task) {
    return <div className="block">
      { task.activity }
    </div>
  },

  getTasksGrid: function () {
    var tasksGrid = []
    this.props.tasks.forEach(function (task) {
      // TODO implement properly
      tasksGrid.push([task])
    })
    return tasksGrid
  }
})

module.exports = HabitCanvas
