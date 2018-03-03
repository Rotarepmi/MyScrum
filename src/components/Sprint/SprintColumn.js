import React, { Component } from 'react';

class SprintColumn extends Component {
  render() {
    return (
      <div className="Sprint-column">
        <p className="Sprint-column-name">
          {this.props.columnName}
        </p>

        <div>
          {this.props.columnContent}
        </div>
      </div>
    );
  }
}

export default SprintColumn;
