import React, { Component } from 'react';
import './App.css';

import Header from './header/header';

class App extends Component {
  state = {
    headerMessage: '영화 소개 프로젝트'
  };

  render() {
    return(
      <div calssName='App'>
        <Header headerMessage={this.state.headerMessage}/>

        <div>Main Content</div>
      </div>
    )
  }
}

export default App;
