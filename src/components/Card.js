import React, { useState } from 'react';

// Check UD videos for if statements about meta data availablity / if statements used
// in src tag. Problem: some NFTs don't have the URL tag.

const Card = ({ nft }) => {
  // const urlCheck = () => {
  //   if (nft.meta.content[1] !== 'undefined') {
  //     return nft.meta.content[1].url;
  //   } else {
  //     return null;
  //   }
  // };

  const [image, setImage] = useState('');

  const getImageUrl = async () => {
    if (nft.meta.content[1] !== 'undefined') {
      const url = await nft.meta.content[1].url();
    }

    setImage(url);
  };

  console.log(nft.meta.content[1].url);

  return (
    <div className="card-wrap">
      <img src={nft.meta.content[1]} alt="" />
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
