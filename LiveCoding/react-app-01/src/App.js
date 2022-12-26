import "./App.css";
import { useState } from "react";

function Header(props) {
  console.log("props", props);
  console.log("props.title : ", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  // useState 의 인자는 데이터의 초기값.
  // useState의 반환 값 [데이터 상태 값, 데이터 변경 set함수]
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB!"></Article>;
  } else if (mode === "READ") {
    let title = null;
    let body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={function () {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {/* 배열을 props로 넘겨줄 때, { 배열명 } 포맷으로 넘김  */}
      {content}
    </div>
  );
}

export default App;

/**
 * Props VS State
 *  Props: 컴포넌트를 사용하는 외부자를 위한 데이터
 *  State : 컴포넌트를 만드는 내부자를 위한 데이터
 *
 *  공통점은 값이 변경되면 새로운 retrun값을 만들어 UI를 변경함.
 */
