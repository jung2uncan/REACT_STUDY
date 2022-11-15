import React from 'react';
import ReactDOM from 'react-dom';
//index.js 에서는 app을 직접적으로 로딩할 필요가 없어짐.
// import App from './App';

//감싸준 RouterWrapper컴포넌트를 넣어준다.
//이미 RouterWrapper 컴포넌트가 App.js를 가지고 있음.
import RouterWrapper from './router-wrapper';

ReactDOM.render(<RouterWrapper />, document.getElementById('root'));