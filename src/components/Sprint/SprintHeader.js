import React, { Component } from 'react';

class SprintHeader extends Component {
  render() {
    return (
      <div className="Sprint-header">
        <p>{this.props.sprintName}</p>
        <div className="Sprint-functions-pane">
          <p className="Sprint-time">Time: {this.props.sprintDate.toLocaleTimeString()}</p>
          <button
            className="Sprint-state-btn light-btn"
            type="button"
            onClick={this.props.changeState}
            disabled={this.props.buttonState.state}
          >
            {this.props.buttonState.text}
          </button>
        </div>
      </div>
    );
  }
}

export default SprintHeader;
