import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );

  //* 배열에 고유한 값이 없다면?
  //map() 자체에서 설정하는 콜백함수의 두 번째 파라미커 index를 key값으로 사용하면 된다.
  // <div>
  //     {users.map((user, index) => (
  //         <User user={user} key={index} />
  //     ))}
  // </div>
}

export default UserList;
