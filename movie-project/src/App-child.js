import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App: constructor');
    }
    componentDidMount() {
        console.log('App: componentDidMount');
    }

    componentDidUpdate() {
        console.log('App: componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('App: componentWillUnmount');
    }

    render() {
        console.log('App: render');

        return (
        <div className='App'>
            Life cycle test
            <Child />
        </div>
        );
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
        console.log('Child: constructor');
      }

      componentDidMount() {
        console.log('Child: componentDidMount');
      }

      componentDidUpdate() {
        console.log('Child: componentDidUpdate');
      }

      componentWillUnmount() {
        console.log('Child: componentWillUnmount');
      }

      render() {
        console.log('Child: render');
    
        return <div className="App">Life cycle test</div>;
      }
}

export default App;

// # 처음 실행 결과
//  App: constructor > App: render > Child: constructor > Child: render > Child: componentDidMount > App: componentDidMount
//  컴포넌트 라이프사이클의 시작은 App이 가장 빠르지만, Child 컴포넌트의 로딩이 모두 끝나야 종료가 되는 것을 확인할 수 있음. 모든 컴포넌트에서 동일하게 적용되는 규칙이며, 업데이트도 같은 방식으로 업테이트된다.

// 컴포넌트가 업데이트 되었을 때 결과
// App: rende > Child: render > Child: componentDidUpdate > App: componentDidUpdate
// App 컴포넌트의 render가 시작된 이후에, child의 render + componentDidUpdate가 수행이 되고 나서야 모든 로딩이 끝났을 때의 App컴포넌트의 componentDidUpdate가 수행됨.