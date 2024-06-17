import React from 'react';

function Character({ id, name, image, status }) {
  
  function emojiHealth() {
    return status === 'Alive' ? '🟢' : status === 'Dead' ? '🔴' : '🚀'
  }
  
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Status: {emojiHealth()} {status}</p>
    </div>
  );
}

export default Character;
