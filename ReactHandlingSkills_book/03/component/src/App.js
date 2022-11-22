import React from 'react';
import Hello from './Hello';
import Hello1 from './Hello1';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" />
      <Hello1 name="react2" color="red" />
      <Hello1 color="pink" />
      <Hello1 color="pink" isSpecial={true} />
      <Hello1 color="blue" isSpecial /> {/* isSpecial={true} 와 같은 의미 */}
    </Wrapper>
  );
}

export default App;
