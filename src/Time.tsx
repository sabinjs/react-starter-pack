import * as React from "react";

interface TimeProps {
  name: string
}

interface TimeState {
  time: Date;
}

class Time extends React.Component<TimeProps, TimeState> {

  constructor(props: TimeProps) {
    super(props);
    this.state = {"time": new Date()};
  }

  currentDate = () => {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className = "timer">
        Time: {this.state.time.toLocaleTimeString()} NPT
        <div>
          <button onClick={this.currentDate}>Show Current Time</button>
        </div>
      </div>
    );
  }
}

export default Time;