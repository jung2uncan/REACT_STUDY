import React, { Component } from 'react';
//클라이언트 사이드 라우팅을 위해선, 클라이언트 라우팅에 사용될 HTML 부분을 브라우저 라우터 라는 태그로 감싸 줘야 함.
import { BrowserRouter } from 'react-router-dom';
//App을 감싸주기 위해서 App을 import 해줌.
import App from './App';

class RouterWrapper extends Component {
    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    }
}


export default RouterWrapper;
