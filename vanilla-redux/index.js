const divToggle = document.querySelector(".toggle"); //class
const counter = document.querySelector("h1"); //tag
const btnIncrease = document.querySelector("#increase"); //id
const btnDecrease = document.querySelector("#decrease"); //id

// action : 프로젝트의 상태에 변화를 일으키는 것
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// action create function (액션 생성 함수) : 액션 객체를 만드는 함수. 반드시 type값을 갖고 있어야 함.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (diff) => ({ type: INCREASE, diff });
const decrease = () => ({ type: DECREASE });

//초기값
const initialState = {
  toggle: false,
  counter: 0,
};

// Reducer : 변화를 일으키는 함수 (parameter : state, action)
// state가 undefined일 떼는 initialState를 기본 값으로 사용
function reducer(state = initialState, action) {
  //action.type 값에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.diff,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
