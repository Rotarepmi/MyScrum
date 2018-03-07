import React from 'react';

const SprintHeader = (props) => {

  return (
    <div className="Sprint-header">
      <p>{props.sprintName}</p>
      <div className="Sprint-functions-pane">
        <p className="Sprint-time">Time: {props.sprintDate.toLocaleTimeString()}</p>
        <button
          className="Sprint-state-btn light-btn"
          type="button"
          onClick={props.changeState}
          disabled={props.buttonState.state}
        >
          {props.buttonState.text}
        </button>
      </div>
    </div>
  );

}

export default SprintHeader;
