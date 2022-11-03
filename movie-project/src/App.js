import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: red;
  width: 300px;
  height: 300px;
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? ' palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
`;

class App extends Component {
  render() {
    console.log('App: render');

    return (
      <div className='App'>
        Life Cycle test
        <StyledDiv/>
        <Button>not primary</Button>
        <Button primary>primary</Button>
      </div>
    );
  }
}

export default App;