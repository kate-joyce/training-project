import React, { createContext, useRef } from 'react';

// Create a context for the scroll reference
const ScrollContext = createContext();

// Create a provider component
export const ScrollProvider = ({ children }) => {
  // Create a ref to be shared
  const topRef = useRef(null);

  return (
    // Provide the ref to all children components
    <ScrollContext.Provider value={topRef}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
