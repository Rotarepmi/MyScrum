import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import SprintColumn from './SprintColumn';

class SprintBoard extends Component {
  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  }
  onDragEnd = () => {
    // the only one that is required
  };

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
          />
          <SprintColumn
            droppableId="col2"
            columnName="W toku"
          />
          <SprintColumn
            droppableId="col3"
            columnName="Gotowe"
          />
        </div>
    </DragDropContext>
    );
  }
}

export default SprintBoard;
