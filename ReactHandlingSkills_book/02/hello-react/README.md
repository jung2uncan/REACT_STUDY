1. 리액트의 시작

1.1 왜 리액트인가?
1.1.1 리액트의 이해
1.1.1.1 초기 렌더링 - render() {…}
: 컴포넌트가 어떻게 생겼는지 정의하는 역할을 함. 뷰가 어떻게 생겼고, 어떻게 작동하는지에 대한 정보를 지닌 객체를 반환한다.

1.1.1.2 조화 과정

- 컴포넌트는 데이터를 업데이트했을 때 단순히 업데이트한 값을 수정하는 것이 아닌, 새로운 데이터로 render 함수를 또 다시 호출한다.
- 이 때, render 함수가 반환하는 결과를 곧바로 DOM에 반영하는 것이 아님!
- 이전에 render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교하여, 둘의 차이를 알아내 최소한의 연산으로 DOM 트리를 업데이트 함!!

  1.2 리액트의 특징
  1.2.1 Virtual DOM
  1.2.1.1 DOM(Document Object Model)이란?

- 객체로 문서 구조를 표현하는 방법으로 XML이나, HTML로 작성함
- 웹 브라우저는 DOM을 활용하여 객체에 자바스크립트와 CSS를 적용함. (DOM은 트리형태라서 특정 노드를 찾거나, 원하는 곳에 수정/제거/삽입 등 모두 가능함)
  1.2.1.2 Virtual DOM

  - 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용함. (실제 DOM의 가벼운 사본과 비슷)

    - 리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때

      1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링
      2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
      3. 바뀐 부분만 실제 DOM에 적용

      1.2.2 기타 특징

  - 일부 웹 프레임워크가 MVC 또는 MVW 등 구조를 지향하는 것과 달리 리액트는 오로지 뷰만 담당함.
    “리액트는 프레임 워크가 아니라 라이브러리” 이다.

2. JSX
   2.2 JSX란?

- JSX는 자바스크립트의 확장 문법이며 XML과 비슷하게 생겼음. 이 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됨.

  - 코드 이해하기
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    //JSX 코드
    <React.StrictMode>
    <App />
    </React.StrictMode>
    );

  : public/index.html 파일 내 id가 ‘root’인 요소에 해당 JSX 코드를 렌더링(보여준다)하겠다는 의미.

  2.4 JSX 문법
  2.4.1 감싸인 요소

- 컴포넌트에 여러 요소가 있으면 반드시 부모 요소 하나로 감싸야 함.
  : Virtual DOM에서 컴포넌트의 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있음.

  최상위를 <div></div>로 감싸거나, 리액트 버전 16이상이면 <Fragment></Fragment>, <></>로 감쌀 수 있음.

  2.4.2 자바스크립트 표현

- JSX안에서 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 {}로 감싸면 됨.

  2.4.3 IF문 대신 조건부 연산자

- JSX 내부의 자바스크립트 표현식에는 if문을 사용할 수 없음. 따라서, 조건에 따른 렌더링을 해야할 때는 JSX 밖에서 if문을 사용하여 사전에 값을 설정하거나, {}안에 조건부 연산자(삼항 연산자)를 사용하면 됨.

  2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

- 코드 예시
  const name = '리액트';
  const undefinedTest = undefined;
  const undefinedTest2 = '테스트';
  return (
  <>
  {name === '리액트' ? (<h1>리액트입니다.</h1>) : (<h2>리액트가 아닙니다.</h2>)} {/_결과 : 리액트입니다._/}
  <div> {name === '리액트' && <h1>&&연산자 테스트</h1>}</div> {/_결과 : &&연산자 테스트_/}
  <div> 결과 : { undefinedTest} </div> {/_결과 : 안나옴(빈 값. 즉, 렌더링 안됨) _/}
  <div> { undefinedTest || '언디파인드' }</div> {/_결과 : 언디파인드 _/}
  <div> { undefinedTest2 || '낫 언디파인드' }</div> {/_결과 : "테스트"_/}
  </>
  )

  2.4.6 인라인 스타일링

  - 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아닌 객체 형채로 넣어줘야 함.
    또한, font-size처렁 ‘-‘문자가 포함되는 이름은 CamelCase로 작성해야함. > fontSize

- 코드 예시
  const style = {
  backgroundColor: 'black',
  color: 'aqua',
  fontSize: '30px',
  }
  return (
  <div style={style}>
  {name}
  </div>
  )

  2.4.7 class 대신 className

  - JSX에서는 class 속성을 설정할 때, className으로 설정함.
