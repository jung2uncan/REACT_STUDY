import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  //   useEffect(() => {
  //     console.log("user 값이 설정됨.");
  //     console.log(user);
  //     return () => {
  //       console.log("user가 바뀌기 전..");
  //       console.log(user);
  //     };
  //   }, [user]);

  // deps 파라미터 생략하기
  useEffect(() => {
    console.log("UserList 렌더링 됨");
    console.log(user);
  });

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
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
}

//React.memo() : 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정.
export default React.memo(UserList);
