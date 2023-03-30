import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경
const INSERT = 'todos/INSERT'; //새로운 todo를 등록
const TOGGLE = 'todos/TOGGLE'; //todo를 체크/체크 해제
const REMOVE = 'todos/REMOVE'; //todo를 삭제

//액선 생성 함수
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; //insert가 호출될 때마다 1씩 더해짐
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

//todos 모듈의 초기 상태와 리듀서 함수
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: false,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.state.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;