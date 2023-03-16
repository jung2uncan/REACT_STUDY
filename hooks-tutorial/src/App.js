import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        ===============<b>실습1</b>===============
        <Counter />
      </div>

      <div>
        ===============<b>실습2</b>===============
        <div>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "숨기기" : "보이기"}
          </button>
          <br />
          {visible && <Info />}
        </div>
      </div>

      <div>
        ===============<b>실습3</b>===============
        <Average />
      </div>
    </div>
  );
};

export default App;
