import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SprintDraggableTask from './SprintDraggableTask';
import AddTaskBtn from './AddTaskBtn';

const SprintColumn = (props) =>  {

  const addTaskBtn = () => {
    if(props.addTaskBtn) {
      return <AddTaskBtn addTask={props.addTask}/>;
    }
  }

  return (
    <div className="Sprint-column">
      <p className="Sprint-column-name">
        {props.columnName}
      </p>

      <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => (
          <div
            className="Sprint-column-droppable"
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? '#97edfc' : '#fff' }}
            {...provided.droppableProps}
          >

          {props.tasks.map((task, index) =>
            <SprintDraggableTask
              key={index}
              taskId={task.taskId}
              taskContent={task.taskContent}
            />
          )}

          </div>
        )}
      </Droppable>

      {addTaskBtn()}
    </div>
  );
  
}

export default SprintColumn;
