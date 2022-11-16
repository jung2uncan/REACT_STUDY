import React, { Fragment } from "react";
import "./App.css";

function App() {
  const name = "리액트";
  const undefinedTest = undefined;
  const undefinedTest2 = "테스트";

  const style = {
    //background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성한다.
    backgroundColor: "black",
    color: "aqua",
    fontSize: "30px",
    fontWeight: "bold",
    padding: 16, //단위 생략시 px
  };
  return (
    <>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}{" "}
      {/*결과 : 리액트입니다.*/}
      <div style={style}>
        {" "}
        {name === "리액트" && <h1>&&연산자 테스트</h1>}
      </div>{" "}
      {/*결과 : &&연산자 테스트*/}
      <div style={style}> 결과 : {undefinedTest} </div>{" "}
      {/*결과 : 안나옴(빈 값. 즉, 렌더링 안됨) */}
      <div className="react"> {undefinedTest || "언디파인드"}</div>{" "}
      {/*결과 : 언디파인드 */}
      <div className="react"> {undefinedTest2 || "낫 언디파인드"}</div>{" "}
      {/*결과 : "테스트"*/}
    </>
  );
}

export default App;

/**
 * const : 한 번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용, scope이 "블럭(Block)"단위
 * let : 동적인 값을 담을 수 있는 변수를 선언할 때 사용, scope이 "블럭(Block)"단위
 *
 * var : 동적인 값을 담을 수 있는 변수를 선언할 때 사용하지만, scope이 "함수(Function)"단위 임.
 */
