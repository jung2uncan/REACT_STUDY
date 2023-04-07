import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootReducer from "./modules";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk"; //thunk : 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싸는 것을 의미함.

//리덕스 미들웨어를 스토어에 적용. 미들웨어는 스토어를 생성하는 과정에서 적용함.
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
