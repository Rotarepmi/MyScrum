import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SprintDraggableEpic from './SprintDraggableEpic';
import AddEpicBtn from './AddEpicBtn';

class SprintColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      epics: ["test1", "test2"]
    }
  }

  addEpicBtn = () => {
    if(this.props.addEpicBtn) {
      return <AddEpicBtn addEpic={this.addEpic}/>;
    }
  }

  addEpic = () => {
    let epics = [];
    this.state.epics.map(epic => epics.push(epic));
    epics.push('test lol');
    this.setState({epics});
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

            {this.state.epics.map((epic, index) =>
              <SprintDraggableEpic
                key={index}
                epicId={index}
                epicContent={epic}
              />
            )}

            </div>
          )}
        </Droppable>

        {this.addEpicBtn()}
      </div>
    );
  }
}

export default SprintColumn;
