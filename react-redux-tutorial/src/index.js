import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

//크롬 확장자 도구 Redux Devtools 적용하기
const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
