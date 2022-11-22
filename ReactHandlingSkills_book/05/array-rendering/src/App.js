import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;
  
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'jungeun',
        email: 'jungeun123@mail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: true
    },
    {
        id: 3,
        username: '텟',
        email: '텟@example.com',
        active: false
    }
  ]);

  const nextId = useRef(4); //useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됨.
                            //이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 됨.
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]); //기존 userList에 신규 user 추가
    //setUsers(users.concat(user)); //concat 함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어 줌.

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user)
    );
  };

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
