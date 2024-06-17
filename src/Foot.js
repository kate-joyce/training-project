import React, { useContext } from 'react';
import ScrollContext from './ScrollContext';

function Foot() {
  const topRef = useContext(ScrollContext);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </footer>
  );
}

export default Foot;
