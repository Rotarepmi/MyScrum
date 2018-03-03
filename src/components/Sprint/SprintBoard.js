import React, { Component } from 'react';
import SprintColumn from './SprintColumn';

class SprintBoard extends Component {
  render() {
    return (
      <div className="Sprint-board">
        <SprintColumn
          columnName="Do zrobienia"
          columnContent="qagbhraehfbdsfg"
        />
        <SprintColumn
          columnName="W toku"
          columnContent="qagbhraehfbdsfg"
        />
        <SprintColumn
          columnName="Gotowe"
          columnContent="qagbhraehfbdsfg"
        />
      </div>
    );
  }
}

export default SprintBoard;
