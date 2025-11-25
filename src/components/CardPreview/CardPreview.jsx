import React from 'react';
import './CardPreview.css';

const CardPreview = ({src, title='Aphrodite'}) => {
  return (
    <div className="card-preview" aria-hidden>
      <img src={src || '/aphrodite-card.png'} alt={title} />
      <div className="card-label">{title}</div>
    </div>
  );
}

export default CardPreview;
