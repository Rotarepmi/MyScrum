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
            <input
              className="Sprint-draggable-input"
              type="text"
              defaultValue={props.taskContent}
            />
          </div>
        </div>
      )}
    </Draggable>
  );

}

export default SprintDraggableTask;
