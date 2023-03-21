import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = (props) => {
  const { todos, onRemove, onToggle } = props;

  //스크롤 되기 전까지 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차이하게끔 설정
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="todoList"
      width={512} //전체 크기
      height={513} //전체 높이 (57 * 9)
      rowCount={todos.length} //항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} // list에 기본으로 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
