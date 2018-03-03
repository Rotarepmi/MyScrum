import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class SprintDraggableEpic extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.epicId}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.epicContent}
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default SprintDraggableEpic;
