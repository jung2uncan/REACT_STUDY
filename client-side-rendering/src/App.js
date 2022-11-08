import React, { Component } from 'react';
// import { Switch, Route, Routes, Link, NavLink } from 'react-router-dom';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import First from './components/first';
import Second from './components/second';
import Main from './components/main';

class App extends Component {
  render () {
    const activeStyle = {
      backgroud: 'black',
      color: 'white',
    };

    return (
      <div className='App'>
        클라이언트 사이드 렌더링
        {/* Link 태그를 이용한 페이지 이동 */}
        <div>
          <ul className="link-list">
            <li>
              {/* 다른 태그와 마찬가지로 className을 넣을 수 있음 */}
              {/* 이동하려 하는 URL을 to라는 Attribute로 표현하면 됨 */}
              {/* <Link className="link" to="/">
                메인 페이지로 이동
              </Link> */}
              <NavLink activeStyle={activeStyle} className="link" to="/">
                메인 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/home">
                홈 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/first">
                First 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/second">
                Second 페이지로 이동
              </NavLink>
            </li>
          </ul>
        </div>
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