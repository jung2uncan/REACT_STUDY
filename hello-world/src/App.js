import { Component } from "react";
import MyComponent from "./MyComponent";
import CounterClass from "./CounterClass";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <>
        <div style={{ width: "500px", float: "left" }}>
          <h4>==============실습1==============</h4>
          <MyComponent name="리액트트" favoriteNumber={3}>
            리액트
          </MyComponent>

          <h4>==============실습2==============</h4>
          <CounterClass></CounterClass>

          <h4>==============실습3==============</h4>
          <Say></Say>

          <h4>==============실습4==============</h4>
          <EventPractice />

          <h4>==============실습5==============</h4>
          <ValidationSample />
        </div>

        <div tyle={{ width: "500px", float: "right" }}>
          <h4>==============실습6==============</h4>
          <div>
            <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
            <button onClick={() => this.scrollBox.scrollToBottom()}>
              맨 밑으로
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
