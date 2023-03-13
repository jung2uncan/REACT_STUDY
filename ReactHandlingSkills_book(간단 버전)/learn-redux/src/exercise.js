import { createStore } from "redux";

//createStore는 스토어를 만들어주는 함수
//리액트 프로젝트에서는 단 하나의 스토어를 만듬.

/* Define State To Be Managed By Redux */
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

/* Define Action Type */
const INCREASE = "INCREASE";
const DECREAE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

/* Define Create Function */
function increase() {
  return {
    type: INCREASE, // Action Object Requires Type Value
  };
}

const decrease = () => ({
  type: DECREAE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

/**
 * Create Reducer
 * 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수
 * 리듀서에서는 불변성을 꼭 지켜줘야함
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREAE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: state.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

/* 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState());

// 스토어 안에 들어있는 상태가 바뀔 때 마다 호출되는 listener함수
const listener = () => {
  const state = store.getState();
  console.log("listener!");
  console.log(state);
};

// const unsubscribe = store.unsubscribe(listener);

//Action Dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "오예" }));
