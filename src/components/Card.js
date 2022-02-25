import React from 'react';

const Card = ({ nft }) => {
  return (
    <div className="card-wrap">
      <img src={nft.meta.content[0].url} alt="" />
      <div className="card-content-wrap">
        <div className="card-content">
          <p className="card-collection-title">Collection Name</p>
          <p className="card-piece-name">{nft.meta.name}</p>
        </div>
        <a className="card-link" href="www.google.com" target="_blank">
          OpenSea
        </a>
      </div>
    </div>
  );
};

export default Card;
