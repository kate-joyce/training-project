import React from 'react';
import Head from './Head.tsx';
import RickAndMortyCharacters from './RickAndMortyCharacters.tsx';
import Foot from './Foot.tsx';
import { ScrollProvider } from './ScrollContext.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <ScrollProvider>
      <div className="App">
        <Head />
        <RickAndMortyCharacters />
        <Foot />
      </div>
    </ScrollProvider>
  );
}

export default App;
