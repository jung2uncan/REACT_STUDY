import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  //return <button className={`Button ${size}`}>{children}</button>;

  //return <button className={classNames("Button", size)}>{children}</button>;

  //3. outline 설정
  //   return (
  //     <button className={classNames("Button", size, color, { outline })}>
  //       {children}
  //     </button>
  //   );

  //4. fullWidth 설정
  //   return (
  //     <button
  //       className={classNames("Button", size, color, { outline, fullWidth })}
  //     >
  //       {children}
  //     </button>
  //   );

  //5. ...rest props 전달하기
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest} //...rest를 사용해서 우리가 지정한 props 를 제외한 값들을 rest 라는 객체에 모아주고, <button> 태그에 {...rest} 를 해주면, rest 안에 있는 객체안에 있는 값들을 모두 <button> 태그에 설정을 함.
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
