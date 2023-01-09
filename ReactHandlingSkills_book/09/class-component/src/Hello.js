import React, { Component } from "react";

//함수형 컴포넌트
// function Hello({ color, name, isSpecail }) {
//   return (
//     <div style={{ color }}>
//       {isSpecail && <b>*</b>}
//       안녕하세요 {name}
//     </div>
//   );
// }

class Hello extends Component {
  //클래스형 컴포넌트에서는 render() 메서드가 꼭 있어야 함. 이 메소드에서 렌더링 하고 싶은 JSX를 반환하면 된다.

  //defaultProps 설정하는 것은 다음과 같이 클래스 내부에 static으로 선언할 수도 있고,
  //class 밖의 33~35번째 줄과 같이 선언할 수 도 있다.
  static defaultProps = {
    name: "이름없음",
  };

  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요. {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
