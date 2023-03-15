import React from "react";
import MyComponent from "./MyComponent";
import CounterClass from "./CounterClass";
import Say from "./Say";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <>
      <MyComponent name="리액트트" favoriteNumber={3}>
        리액트
      </MyComponent>
      <br />
      <CounterClass></CounterClass>
      <br />
      <Say></Say>
      <br />
      <EventPractice />
    </>
  );
};

export default App;
