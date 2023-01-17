//componentDidCatch 생명주기 메서드를 사용하여 사전에 예외처리를 하지 않은 에러가 발생 했을 때 사용자에게 에러가 발생했다고 알려주는 화면
import React, { Component } from "react";
import * as Sentry from "@sentry/browser";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  /*
    componentDidCatch 메소드는 2개의 파라미터를 사용하는데,
    첫 번째 파라미터는 '에러의 내용'
    두 번째 파라미터는 '에러가 발생한 위치'
  */
  componentDidCatch(error, info) {
    console.log("에러가 발생했습니다.");
    console.log({
      error,
      info,
    });

    this.setState({
      error: true,
    });

    if (process.env.NODE_ENV === "production") {
      Sentry.captureException(error, { extra: info });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
