import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return <div className='App'>Life Cycle test</div>;
  }
}

export default App;


// 처음 실행 결과
// constructor > render > componentDidMount

// 컴포넌트가 업데이트 되었을 때 결과
// render > componentDidUpdate