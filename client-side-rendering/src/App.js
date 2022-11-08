import React, { Component } from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import First from './components/first';
import Second from './components/second';
import Main from './components/main';

class App extends Component {
  render () {
    return (
      <div className='App'>
        클라이언트 사이드 렌더링
        {/* react-router-dom에서 제공하는 태그. */}
        {/* path 부분에 url 경로를 넣고, component의 to의 경로에서 보여주고 싶은 컴포넌트를 넣어주면 됨 */}
        <Routes>
          {/* exact는 URL이 정확히 매치 되었을 때에만 Route에 있는 컴포넌트를 보여줄 수 있도록 하는 속성*/}
          <Route path="/" exact element={<Main/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/first" element={<First/>} />
          <Route path="/second" element={<Second/>} />
        </Routes>
      </div>
    );
  }
}

export default App;