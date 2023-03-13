import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  //useState를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출함.
  //이 함수를 호출하면 배열이 반환되는데 여기서, 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수를 반환 함.
  //즉, [현재 상태, Setter 함수] 와 같이 반환함.

  const onIncrease = () => {
    //console.log('+1');
    //setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    //console.log('-1');
    //setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
