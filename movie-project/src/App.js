import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //App컴포넌트에 생성한 state는, App컴포넌트에서만 업데이트 할 수 있음.
  state = {
    count: 0
  };

  countUp() {
    this.setState({
      count: this.state.count + 1
    })
  }

  countDown(){
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return(
      <div calssName='App'>
        {/* <div>
          <span>Current Count : {this.state.count}</span>
        </div> */}
        <PropsTestClass count={this.state.count}/>
        <div>
          <button onClick={this.countUp.bind(this)}>Count Up!</button>
          <button onClick={this.countDown.bind(this)}>Count Down!</button>
        </div>
      </div>
    )
  }
}

//props
class PropsTestClass extends Component {
  render() {
    return (
      <div>
        <div>
          <span> Hello I am TestClass </span>
        </div>
        <div> 받은 Props의 데이터는 {this.props.count} 입니다. </div>
      </div>
    );
  }
}

export default App;
