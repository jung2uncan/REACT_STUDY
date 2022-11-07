import React, { Component } from 'react';
import styled from 'styled-components';
import ModalPage from './component/modal/modal';
import NoteList from './component/note-list/note-list';
import NoteRaw from './component/note-raw/note-raw';

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

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;

class App extends Component {

  state={
    search: '', //검색할 때의 용도로 사용
    notes: [  //노트 리스트
      { date: new Date(), text: '첫 번째 메모 테스트', title: '첫 번째 메모입니다.', edited: false},
      { date: new Date(), text: '두 번째 메모', title: '두 번째 메모입니다.', edited: false},
    ],
    modalToogle: false
  };

  toogleModal = () => {
    this.setState({
      modalToogle: !this.state.modalToogle
    });
  }

  createNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes, {title, text, date: new Date(), edited: false}]
    });
  }

  //변경과 삭제는, 원래 state에 있는 것을 변경하기 때문에 몇 번째의 노트인지가 필요하므로 number 라는 것을 받음.
  changeNote = (title, text, number) => {
    this.setState({
      notes: this.state.notes.map((note, idx) => (idx === number ? {...note, title, text, edited: true} : note))
    });
  }

  deleteNote = number => {
    this.setState({
      notes: this.state.notes.filter((note, idx) => (idx === number ? false : true))
    });
  }

  render() {
    return (
      <Container>
        {this.state.modalToogle && (
        <ModalPage>
          <NoteRaw action={this.createNote} close={this.toogleModal} />
        </ModalPage>
        )}
        <AppDiv id='app'>
          <SearchBar>
            <div>
              <span>노트 만들기</span>
            </div>
            <div>
              <button onClick={this.toogleModal}>노트 작성</button>
              <div id="search-bar"></div>
            </div>
          </SearchBar>
          {/* <NoteList notes={this.state.notes}/> */}

          {/* 편집 삭제 버튼을 누를 때 모달과 함께 실행되어야 하기 때문에, 이 메소드를 전달 */}
          <NoteList 
              notes={this.state.notes} 
              changeNote={this.changeNote} 
              deleteNote={this.deleteNote} 
          />
        </AppDiv>
      </Container>
    )
  }
}
export default App;
