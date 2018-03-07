import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const SprintBoard = (props) => {

  return (
    <DragDropContext
      onDragStart={props.onDragStart}
      onDragUpdate={props.onDragUpdate}
      onDragEnd={props.onDragEnd}
    >
      <div className="Sprint-board">
        {props.children}
      </div>
    </DragDropContext>
  );

}

export default SprintBoard;
