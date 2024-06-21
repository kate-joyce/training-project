import React, { createContext, useRef, RefObject } from 'react';

// Define the type for the context
interface ScrollContextProps {
  topRef: RefObject<HTMLDivElement>;
}

// Create a context with the defined type
const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

// Create a provider component
export const ScrollProvider: React.FC = ({ children }) => {
  // Create a ref to be shared
  const topRef = useRef<HTMLDivElement>(null);

  return (
    // Provide the ref to all children components
    <ScrollContext.Provider value={{ topRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook for using the ScrollContext
export const useScroll = () => {
  const context = React.useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export default ScrollContext;
