import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    // Consumer사이에 중괄호를 열어서 그 안에 함수를 넣어주는 패턴을 Function as a child 혹은 Render Props 라고 함.
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
