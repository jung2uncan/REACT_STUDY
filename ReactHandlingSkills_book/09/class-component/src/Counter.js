import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1,
  };

  handleIncrease = () => {
    console.log("INCREASE!");
    console.log(this);
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  handleDecrease = () => {
    console.log("DECREASE!");
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값 : {this.state.fixed}</p>{" "}
        {/* this.setState 를 할 때 파라미터에 넣는 객체에 fixed 값을 넣어주지 않아도 값이 유지됨.*/}
      </div>
    );
  }
}

export default Counter;
