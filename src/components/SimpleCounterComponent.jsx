import  { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    console.log("This is Simple Component")
    return (
      <div>
        <h1>Simple Component</h1>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
