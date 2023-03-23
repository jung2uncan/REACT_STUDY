import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./contexts/SelectContext";

const App = () => {
  return (
    //Provider를 사용하면 Context의 value를 변경할 수 있음.
    //Provider를 사용하면 value 값을 꼭 명시해주어야 제대로 작동함! (함수도 전달 가능))
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
