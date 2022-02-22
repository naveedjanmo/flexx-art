import React from 'react';

const Card = () => {
  return (
    <div className="card-wrap">
      <img src={require('../assets/placeholder.png')} alt="" />
      <div className="card-content-wrap">
        <div className="card-content">
          <p className="card-collection-title">Collection Title</p>
          <p className="card-piece-name">Piece Name</p>
        </div>
        <a className="card-link" href="www.google.com" target="_blank">
          OpenSea
        </a>
      </div>
    </div>
  );
};

export default Card;
