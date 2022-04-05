import React from 'react';

const Card = ({ nft }) => {
  return (
    <div className="card-wrap">
      <div className="card-content-wrap">
        <div className="card-content">
          <p className="card-collection-title">Collection Name</p>
          <p className="card-piece-name">Asset Name</p>
        </div>
        <img src={nft.image_url} />
        <a className="card-link" href="www.google.com" target="_blank">
          OpenSea
        </a>
      </div>
    </div>
  );
};

export default Card;
