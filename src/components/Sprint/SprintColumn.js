import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SprintDraggableTask from './SprintDraggableTask';
import AddTaskBtn from './AddTaskBtn';

class SprintColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  addTaskBtn = () => {
    if(this.props.addTaskBtn) {
      return <AddTaskBtn addTask={this.addTask}/>;
    }
  }

  addTask = () => {
    let tasks = [];
    this.state.tasks.map(task => tasks.push(task));
    tasks.push('test lol');
    this.setState({tasks});
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

            {this.state.tasks.map((task, index) =>
              <SprintDraggableTask
                key={index}
                taskId={index}
                taskContent={task}
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
