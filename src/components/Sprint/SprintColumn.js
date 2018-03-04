import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SprintDraggableTask from './SprintDraggableTask';
import AddTaskBtn from './AddTaskBtn';

class SprintColumn extends Component {
  addTaskBtn = () => {
    if(this.props.addTaskBtn) {
      return <AddTaskBtn addTask={this.props.addTask}/>;
    }
  }

  render() {
    return (
      <div className="Sprint-column">
        <p className="Sprint-column-name">
          {this.props.columnName}
        </p>

        <Droppable droppableId={this.props.droppableId}>
          {(provided, snapshot) => (
            <div
              className="Sprint-column-droppable"
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? '#97edfc' : '#fff' }}
              {...provided.droppableProps}
            >

            {this.props.tasks.map((task, index) =>
              <SprintDraggableTask
                key={index}
                taskId={task.taskId}
                taskContent={task.taskContent}
              />
            )}

            </div>
          )}
        </Droppable>

        {this.addTaskBtn()}
      </div>
    );
  }
}

export default SprintColumn;
