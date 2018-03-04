import React, { Component } from 'react';

class AddTaskBtn extends Component {
  render() {
    return (
      <button
        className="light-btn"
        onClick={this.props.addTask}
      >
        Dodaj zadanie
      </button>
    );
  }
}

export default AddTaskBtn;
