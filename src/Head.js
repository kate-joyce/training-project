import React, { useState, useContext } from 'react';
import ScrollContext from './ScrollContext';

const Head = () => {
  const topRef = useContext(ScrollContext);
  const [message, setMessage] = useState(true);
  //create an input field and button and then use a ref to focus the input field when the button is clicked

  return <header ref={topRef} className="App-header">
    {message ? <p>Check out the Rick and Morty universe(s)</p> : <p>or not</p>}
    <button onClick={() => setMessage(!message)}>Toggle message</button>
  </header>
};

export default Head;