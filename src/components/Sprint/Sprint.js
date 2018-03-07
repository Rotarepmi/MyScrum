import React, { Component } from 'react';
import './Sprint.css';
import SprintHeader from './SprintHeader';
import SprintBoard from './SprintBoard';
import SprintColumn from './SprintColumn';

class Sprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprintName: null,
      sprintState: null,
      buttonState: {
        state: null,
        text: null
      },
      sprintDate: null,
      todo: [{taskId: 0.15154154, taskContent: 'aaaaa'}],
      ongo: [{taskId: 0.124124, taskContent: 'bbbbb'}],
      done: [{taskId: 0.12411, taskContent: 'ccccc'}]
    }
  }

  // this will be replaced by db request
  componentWillMount() {
    this.setState({
      sprintName: "Pierwszy sprint",
      sprintState: 0,
      buttonState: {
        state: false,
        text: "Start"
      },
      sprintDate: new Date()
    });
  }

  changeState = () => {
    this.setState(prevState => {
      switch(prevState.sprintState) {
        case 0:
          return {
            sprintState: 1,
            buttonState: {
              state: false,
              text: "Ukończ"
            }
          };
        case 1:
          return {
            sprintState: 2,
            buttonState: {
              state: true,
              text: "Ukończono"
            },
            sprintDate: new Date()
          };
        default: return {};
      }
    });
  }

  addTaskHandler = () => {
    let tasksToDo = [];
    this.state.todo.map(task => tasksToDo.push(task));
    tasksToDo.push({taskId: Date.now(), taskContent: 'test'});
    this.setState({todo: tasksToDo});
  }

  onDragStart = () => {
    /*...*/
  };

  onDragUpdate = () => {
    /*...*/
  };

  onDragEnd = (result) => {
    const src = result.source.droppableId,
          dst = result.destination.droppableId;
    const srcTasks = this.state[src],
          dstTasks = this.state[dst];
    let newSrcTasks = srcTasks.filter(task => task.taskId !== result.draggableId),
        newDstTasks;

    if(result.source.droppableId === result.destination.droppableId) {
      newDstTasks = newSrcTasks;
      newDstTasks.splice(result.destination.index, 0, srcTasks.find(task => task.taskId === result.draggableId));
    }
    else {
      newDstTasks = dstTasks;
      newDstTasks.splice(result.destination.index, 0, srcTasks.find(task => task.taskId === result.draggableId));
    }

    this.setState({
      [src]: newSrcTasks,
      [dst]: newDstTasks
    })

    console.log(this.state);

    /*

    switch(result.source.droppableId) {
      case 'col1':
        let currToDo = prevToDo.filter(task => task.taskId !== result.draggableId);

        switch(result.destination.droppableId) {
          case 'col1':
            currToDo.splice(result.destination.index, 0, prevToDo.find(task => task.taskId === result.draggableId));
            this.setState({todo: currToDo});
            break;
          case 'col2':
            let currOnGo = prevOnGo;
            currOnGo.splice(result.destination.index, 0, prevToDo.find(task => task.taskId === result.draggableId));
            this.setState({ongo: currOnGo});
            break;
          default: return;
        }
        break;
      default: return;
    }
    */

    console.log(result);
  };

  render() {
    return (
      <div className="Sprint-wrapper">
        <SprintHeader
          sprintName={this.state.sprintName}
          sprintDate={this.state.sprintDate}
          buttonState={this.state.buttonState}
          changeState={this.changeState}
        />

        <SprintBoard
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <SprintColumn
            droppableId="todo"
            columnName="Do zrobienia"
            addTaskBtn="true"
            addTask={this.addTaskHandler}
            tasks={this.state.todo}
          />
          <SprintColumn
            droppableId="ongo"
            columnName="W toku"
            tasks={this.state.ongo}
          />
          <SprintColumn
            droppableId="done"
            columnName="Gotowe"
            tasks={this.state.done}
          />
        </SprintBoard>

      </div>
    );
  }
}

export default Sprint;
