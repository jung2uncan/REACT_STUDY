import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <p>
        ===============<b>실습1</b>===============
        <Counter />
      </p>
      <p>
        ===============<b>실습2</b>===============
        <div>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "숨기기" : "보이기"}
          </button>
          <hr />
          {visible && <Info />}
        </div>
      </p>
    </div>
  );
};

export default App;
