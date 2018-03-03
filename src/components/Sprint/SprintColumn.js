import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SprintDraggableEpic from './SprintDraggableEpic';

class SprintColumn extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="Sprint-column"
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
          >
            <p className="Sprint-column-name">
              {this.props.columnName}
            </p>

            <SprintDraggableEpic
              epicId={this.props.epicId}
              epicContent={this.props.epicContent}
            />

          </div>
        )}
      </Droppable>
    );
  }
}

export default SprintColumn;
