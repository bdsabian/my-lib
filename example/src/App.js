import React, { useState } from 'react';

import {Counter, Greeter} from "my-lib";

const App = () => {
  const [greet, setGreet] = useState(true);
  return (
    <div>
      <div><button onClick={() => setGreet(!greet)}>{greet ? "Show Counter" : "Show Greeter"}</button></div>
      {greet && <Greeter name="John Doe" />}
      {!greet && <Counter />}
    </div>
  );
}

export default App;
