import React, { Component } from 'react';

class AddEpicBtn extends Component {
  render() {
    return (
      <button
        className="light-btn"
        onClick={this.props.addEpic}
      >
        Dodaj epikę
      </button>
    );
  }
}

export default AddEpicBtn;
