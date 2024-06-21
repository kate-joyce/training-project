import React, { useState } from 'react';
import { useScroll } from './ScrollContext';

const Head: React.FC = () => {
  const { topRef } = useScroll();
  const [message, setMessage] = useState<boolean>(true);

  return (
    <header ref={topRef} className="App-header">
      {message ? <p>Check out the Rick and Morty universe(s)</p> : <p>or not</p>}
      <button onClick={() => setMessage(!message)}>Toggle message</button>
    </header>
  );
};

export default Head;
