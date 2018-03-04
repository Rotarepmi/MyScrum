import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class SprintDraggableTask extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.taskId}>
        {(provided, snapshot) => (
          <div>
            <div
              className="Sprint-draggable-component"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <input
                className="Sprint-draggable-input"
                type="text"
                defaultValue={this.props.taskContent}
              />
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default SprintDraggableTask;
