import React from 'react';
import Head from './Head';
import RickAndMortyCharacters from './RickandMortyCharacters';
import Foot from './Foot';
import { ScrollProvider } from './ScrollContext';
import './App.css';

function App() {
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
