import React, { Component } from "react";
import './App.css';
import Child from "./child";

class App extends Component {

  state = {
    arr: [1,2,3,4,5,6,7,8,9,10,11,12,3,3,5,43,6,54,7,56,8867,768,6,4,3,45,43,53,53,5,345,44]
  }

  render() {
    return(
      <div className="App">
        <Child/>
      </div>
    );
  }
}

export default App;