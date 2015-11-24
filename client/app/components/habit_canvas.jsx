import React from 'react'

var HabitCanvas = React.createClass({
  render: function() {
    var tasksGrid = this.getTasksGrid()

    console.log("tasksGrid", tasksGrid)

    return (
      <div className="canvas">
        { tasksGrid.map(this.renderTower) }
      </div>
    )
  },

  renderTower: function (tasks) {
    return <div className="tower">
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
