import React from "react";

// function Hello(props) {
//   return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
// }

//비구조화 할당 방법
function Hello1({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
        { isSpecial ? <b> * </b> : null }
        {/* { isSpecial && <b> * </b> } */}
        안녕하세요 {name}
    </div>
  );
}

// defaultProps? 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정
Hello1.defaultProps = {
  name: "이름없음",
};
export default Hello1;
