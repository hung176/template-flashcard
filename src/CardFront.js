import React from 'react';

export default function CardFront({
  word,
  imageUrl,
}) {

  return (
    <div className="card-front">
      <img src={imageUrl} alt={word} />
    </div>
  );
}