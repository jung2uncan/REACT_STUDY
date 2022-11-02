import React, { Component } from 'react';
import './App.css';

// import Header from './header';

class App extends Component {

  //JSX와 이벤트
  testEvent = () => {
    console.log('Button Clicked!');
  }

  //state, 현재 컴포넌트의 데이터
  state = {
    helloMsg: 'Hello ReactJS!!'
  }

  //state를 변경하는 예제
  buttonClick() {
    this.setState({ //state 업데이트를 하려면 무조건 setState라는 메소드를 사용해야만 함.
      helloMsg: 'Button Clicked!!'
    })
  }

  render() {
    const javascriptVatiable = 'javascriptVatiable';
    const helloCoding = 'helloCoding';

    return (
      <div className='App' style={{color: 'blue'}}>
        {/* <Header/> */}
        <div>
          {/* Hello ReactJS! */}
          <span>{this.state.helloMsg}</span>
        </div>
        <div>
          {new Date().getDate() < 15 ? javascriptVatiable :  helloCoding}
        </div>

        {/* 이벤트를 바인딩 시킬 때에는 camelCase 사용해야 함. */}
        <button onClick={this.buttonClick.bind(this)}>
          Click me!
        </button>
      </div>
    )
  }
}

export default App;

// * state, 현재 컴포넌트의 데이터
// - state는 현재 컴포넌트에서 생성, 변할 수 있는 데이터. state는 오직 state가 생성된 컴포넌트 내에서만 변경이 가능함.
// - state는 반드시 객체 형태로 생성 되거나 아니면 null (state를 정의하지 않음) 타입이여야만 함.

