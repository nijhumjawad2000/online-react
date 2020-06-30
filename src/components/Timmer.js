import React, { Component } from "react";
class Timmer extends Component {
  state = {
    count: 0,
  };
  intervalId = null;
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Thimer Finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };
  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };
  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  render() {
    return (
      <div style={{ marginTop: "10vh" }} className="container">
        <h1 className="text-center">Stop watch</h1>
        <div>
          <button onClick={this.decrementCount}>-</button>
          <h1 className="text-center">{this.state.count}</h1>
          <button onClick={this.incrementCount}>+</button>
          <div>
            <button onClick={this.startTimer}>Start</button>
            <button onClick={this.stopTimer}>Stop</button>
            <button onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timmer;
