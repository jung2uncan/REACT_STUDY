import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number); //connect 함수를 사용하지 않아도 리덕스의 상태 조회 가능
  const dispatch = useDispatch(); // 컨테이너 컴포넌트에서 액션을 디스패치할 때 사용

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
