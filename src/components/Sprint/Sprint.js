import React, { Component } from 'react';
import './Sprint.css';
import SprintHeader from './SprintHeader';
import SprintBoard from './SprintBoard';

class Sprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprintName: null,
      sprintState: null,
      buttonState: {
        state: null,
        text: null
      },
      sprintDate: null
    }
  }

  componentWillMount() {
    this.setState({
      sprintName: "Pierwszy sprint",
      sprintState: 0,
      buttonState: {
        state: false,
        text: "Start"
      },
      sprintDate: new Date()
    });
  }

  changeState = () => {
    this.setState(prevState => {
      switch(prevState.sprintState) {
        case 0:
          return {
            sprintState: 1,
            buttonState: {
              state: false,
              text: "Ukończ"
            }
          };
        case 1:
          return {
            sprintState: 2,
            buttonState: {
              state: true,
              text: "Ukończono"
            },
            sprintDate: new Date()
          };
        default: return {};
      }
    });
  }

  render() {
    return (
      <div className="Sprint-wrapper">
        <SprintHeader
          sprintName={this.state.sprintName}
          sprintDate={this.state.sprintDate}
          buttonState={this.state.buttonState}
          changeState={this.changeState}
        />

        <SprintBoard

        />
      </div>
    );
  }
}

export default Sprint;
