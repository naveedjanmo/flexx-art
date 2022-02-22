import React from 'react';
import Card from './Card';

const Container = ({ nfts }) => {
  return (
    <div className="container">
      {nfts.map((nft, index) => {
        return <Card nft={nft} key={index} />;
      })}
    </div>
  );
};

export default Container;
