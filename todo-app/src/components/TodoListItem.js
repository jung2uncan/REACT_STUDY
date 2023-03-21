import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div
          className="remove"
          onClick={() => {
            onRemove(id);
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

//해당 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 되지 않도록 설정
//TodoListItem 컴포넌트는 {todo, onRemove, onToggle}이 바뀌지 않으면 리렌더링 되지 않음.
export default React.memo(TodoListItem);
