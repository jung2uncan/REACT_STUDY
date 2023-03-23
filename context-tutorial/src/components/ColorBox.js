import ColorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    // Consumer사이에 중괄호를 열어서 그 안에 함수를 넣어주는 패턴을 Function as a child 혹은 Render Props 라고 함.
    <ColorConsumer>
      {/* 비구조화 할당 */}
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
