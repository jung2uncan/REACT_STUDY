import React, { Component } from "react";

class Counter extends Component {
  //.this에 컴포넌트 인스턴스 매핑하려면?

  // 방법 1) 클래스의 생성자 메서드 constructor 에서 bind 작업
  //   constructor(props) {
  //     super(props);
  //     this.handleIncrease = this.handleIncrease.bind(this);
  //     this.handleDecrease = this.handleDecrease.bind(this);
  //   }

  //   // 클래스 내부에 종속된 함수를 "메소드"라고 함.
  //   handleIncrease() {
  //     console.log("INCREASE!");
  //     console.log(this);
  //   }

  //   handleDecrease() {
  //     console.log("DECREASE!");
  //   }

  // 방법 2) 커스텀 메서드를 선언 할 때 화살표 함수 문법을 사용하기
  //   handleIncrease = () => {
  //     console.log("INCREASE!");
  //     console.log(this);
  //   };

  //   handleDecrease = () => {
  //     console.log("DECREASE!");
  //   };

  // 방법 3) 상태(state) 선언하기
  constructor(props) {
    super(props);
    // 클래스형 컴포넌트의 state는 무조건 객체형태여야 함.
    //render 메서드에서 state 를 조회하려면 this.state로 조회함
    this.state = {
      counter: 0,
    };
  }

  handleIncrease = () => {
    console.log("INCREASE!");
    console.log(this);
  };

  handleDecrease = () => {
    console.log("DECREASE!");
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
