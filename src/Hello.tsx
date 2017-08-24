import * as React from "react";

interface HelloProps {
  name: string
}

interface State {
  time: Date;
}

class Hello extends React.Component<HelloProps, State> {

  constructor(props: HelloProps) {
    super(props);
    this.state = {"time": new Date()};
  }


  activateLasers = () => {
    console.log("sabin", "activateLaser clicked")
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        Hello, {this.state.time.toLocaleTimeString()} <h1>Bir Bajracharya</h1>
        <button onClick={this.activateLasers}> Activate Lasers</button>
      </div>
    );
  }
}

export default Hello;