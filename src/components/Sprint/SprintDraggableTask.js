import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const SprintDraggableTask = (props) => {

  return (
    <Draggable draggableId={props.taskId}>
      {(provided, snapshot) => (
        <div>
          <div
            className="Sprint-draggable-component"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="Sprint-draggable-input">
              {props.taskContent}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );

}

export default SprintDraggableTask;
