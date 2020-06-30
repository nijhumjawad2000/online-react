import React, { Component } from "react";

class Practice extends Component {
  //   constructor(props) {
  //     super(props);
  //     // this.count = 5;
  //     this.state = {
  //       count: 0,
  //     };
  //   }
  state = {
    count: 0,
  };
  //   count = 10;

  render() {
    return (
      <div>
        <h1>count= {this.state.count}</h1>
        <button
          className="btn"
          style={{ width: "50px", backgroundColor: "skyblue" }}
          onClick={() => {
            // this.setState({ count: this.state.count + 1 });
            this.setState(
              (prev) => {
                return {
                  count: prev.count + 1,
                };
              },
              () => {
                console.log("click  " + this.state.count);
              }
            );
          }}
        >
          Add
        </button>
        <button
          className="btn"
          style={{ width: "50px", backgroundColor: "skyblue" }}
          onClick={() => {
            // this.setState({ count: this.state.count - 1 });
            this.setState(
              (prev) => {
                return {
                  count: prev.count - 1,
                };
              },
              () => {
                console.log("click  " + this.state.count);
              }
            );
          }}
        >
          minus
        </button>
      </div>
    );
  }
}

export default Practice;
