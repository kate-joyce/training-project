import React from 'react';

interface CharacterProps {
  key: number;
  id: number;
  name: string;
  image: string;
  status: string;
}

const Character: React.FC<CharacterProps> = ({ id, name, image, status }) => {
  
  function emojiHealth() {
    return status === 'Alive' ? '🟢' : status === 'Dead' ? '🔴' : '🚀'
  }
  
  return (
    <div className="character-card p-5">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Status: {emojiHealth()} {status}</p>
    </div>
  );
}

export default Character;