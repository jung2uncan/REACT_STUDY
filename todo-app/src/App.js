import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useState, useRef, useReducer } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로 추가
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  //원래는 두 번째 파라미터에 초기 상태를 넣어줘야하지만,
  //이와 같이 두 번째에 undefined. 세 번째에 createBulkTodos를 넣어주면 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수가 호출됨.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.curruent,
      text,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId  1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default App;
