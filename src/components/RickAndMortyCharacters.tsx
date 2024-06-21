import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const RickAndMortyCharacters: React.FC = () => {
  interface Character {
    key: number;
    id: number;
    name: string;
    image: string;
    status: string;
  }
  
  const [characters, setCharacters] = useState<Character[]>([]);
  // const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
 
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []); // Empty array means this effect runs once, after the initial render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="character-list flex flex-wrap justify-center">
        {characters.map(character => (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
          />
        ))}
      </div>
    </div>
  );
}

export default RickAndMortyCharacters;
