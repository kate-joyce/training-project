import React from 'react';
import Head from './components/Head';
import RickAndMortyCharacters from './components/RickAndMortyCharacters';
import Foot from './components/Foot';
import { ScrollProvider } from './components/ScrollContext';
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
