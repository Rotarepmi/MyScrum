import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import SprintColumn from './SprintColumn';

class SprintBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [{taskId: 0.15154154, taskContent: 'aaaaa'}],
      ongo: [{taskId: 0.124124, taskContent: 'bbbbb'}],
      done: [{taskId: 0.12411, taskContent: 'ccccc'}]
    }
  }

  onDragStart = () => {
    /*...*/
  };

  onDragUpdate = () => {
    /*...*/
  };

  onDragEnd = (result) => {
    const prevToDo = this.state.todo;
    const prevOnGo = this.state.ongo;
    const prevDone = this.state.done;

    switch(result.source.droppableId) {
      case 'col1':
        let currToDo = prevToDo.filter(task => task.taskId !== result.draggableId);
        this.setState({todo: currToDo});

        switch(result.destination.droppableId) {
          case 'col1':
            currToDo = prevToDo;
            currToDo.splice(result.destination.index, 0, prevToDo.find(task => task.taskId === result.draggableId));
            this.setState({todo: currToDo});
            break;
          case 'col2':
            let currOnGo = prevOnGo;
            currOnGo.splice(result.destination.index, 0, prevToDo.find(task => task.taskId === result.draggableId));
            this.setState({ongo: currOnGo});
            break;
          case 'col3':
            let currDone = prevDone;
            currDone.splice(result.destination.index, 0, prevToDo.find(task => task.taskId === result.draggableId));
            this.setState({done: currDone});
            break;
          default: return;
        }

        break;
      case 'col2':
        let currOnGo = prevOnGo.filter(task => task.taskId !== result.draggableId);
        this.setState({ongo: currOnGo});

        switch(result.destination.droppableId) {
          case 'col1':
            let currToDo = prevToDo;
            currToDo.splice(result.destination.index, 0, prevOnGo.find(task => task.taskId === result.draggableId));
            this.setState({todo: currToDo});
            break;
          case 'col2':
            currOnGo = prevOnGo;
            currOnGo.splice(result.destination.index, 0, prevOnGo.find(task => task.taskId === result.draggableId));
            this.setState({ongo: currOnGo});
            break;
          case 'col3':
            let currDone = prevDone;
            currDone.splice(result.destination.index, 0, prevOnGo.find(task => task.taskId === result.draggableId));
            this.setState({done: currDone});
            break;
          default: return;
        }

        break;
      case 'col3':
        let currDone = prevDone.filter(task => task.taskId !== result.draggableId);
        this.setState({done: currDone});

        switch(result.destination.droppableId) {
          case 'col1':
            let currToDo = prevToDo;
            currToDo.splice(result.destination.index, 0, prevDone.find(task => task.taskId === result.draggableId));
            this.setState({todo: currToDo});
            break;
          case 'col2':
            let currOnGo = prevOnGo;
            currOnGo.splice(result.destination.index, 0, prevDone.find(task => task.taskId === result.draggableId));
            this.setState({ongo: currOnGo});
            break;
          case 'col3':
            currDone = prevDone;
            currDone.splice(result.destination.index, 0, prevDone.find(task => task.taskId === result.draggableId));
            this.setState({done: currDone});
            break;
          default: return;
        }

        break;
      default: return;
    }

    console.log(result);
  };

  addTask = () => {
    let tasksToDo = [];
    this.state.todo.map(task => tasksToDo.push(task));
    tasksToDo.push({taskId: Math.random(), taskContent: 'test'});
    this.setState({todo: tasksToDo});
  }

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <div className="Sprint-board">
          <SprintColumn
            droppableId="col1"
            columnName="Do zrobienia"
            addTaskBtn="true"
            addTask={this.addTask}
            tasks={this.state.todo}
          />
          <SprintColumn
            droppableId="col2"
            columnName="W toku"
            tasks={this.state.ongo}
          />
          <SprintColumn
            droppableId="col3"
            columnName="Gotowe"
            tasks={this.state.done}
          />
        </div>
    </DragDropContext>
    );
  }
}

export default SprintBoard;
