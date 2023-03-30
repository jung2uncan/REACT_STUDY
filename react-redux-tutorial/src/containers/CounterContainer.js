import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//state를 파라미터로 받아오며, 현재 스토어가 가지고 있는 상태를 가리킴
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

//store의 내장함수 dispatch를 파라미터로 받아옴
/*
const mapDispatchToProps = (dispatch) => ({
  //방법 1
  increase: () => {
    console.log('increase');
    return dispatch(increase());
  },
  decrease: () => {
    console.log('decrease');
    return dispatch(decrease());
  },
});
*/

/*
const mapDispatchToProps = (dispatch) =>
  //방법 2 : bindActionCreators사용
  bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  );
*/

const mapDispatchToProps = {
  //방법 2 : 액션 생성 함수로 이뤄진 객체 반환
  //이와 같이 connect 함수의 두 번째 파라미터를 아예 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators작업을 대신 해줌
  increase,
  decrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
