import React, { useContext } from 'react';
import { useScroll } from './ScrollContext.tsx';

const Foot: React.FC = () => {
  const { topRef } = useScroll();

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
};

export default Foot;
