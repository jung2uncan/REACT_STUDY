//컴포넌트 최적화를 위한 덜 최적화된 컴포넌트 제작하기
import React, { Component } from 'react';
import './App.css';
import PropsComponentExample from './PropsComponent';
import NoPropsComponentExample from './noPropsComponent';

class App extends Component{
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 500);
  }

  render () {
    return (
      <div className='App'>
        <div>Hello!</div>
        <PropsComponentExample count={this.state.count}/>
        <NoPropsComponentExample />
      </div>
    );
  };
}

export default App;
