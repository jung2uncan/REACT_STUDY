import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  alighn-items: center;
`;

const AppDiv = styled.div`
  width: 50vw;
  height: 50vh;
  border-radius: 0.25rem;
  padding: 11rem;
  box-shadow: 0 10px 5px -6px #777;
  backgound-color: #28bbf7;
`;

class App extends Component {

  state={
    search: '',
    notes: [
      { date: new Date(), text: '첫 번째 메모 테스트', title: '첫 번째 메모입니다.', edited: false},
      { date: new Date(), text: '두 번째 메모', title: '두 번째 메모입니다.', edited: false},
    ]
  };

  render() {
    return (
      <Container>
        <AppDiv id='app'>
          <div id="search-bar">Search-Bar</div>
          <div id="note-list">Note-List</div>
        </AppDiv>
      </Container>
    )
  }
}
export default App;
