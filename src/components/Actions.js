import { useState } from 'react';

const Actions = ({ connectWallet }) => {
  return (
    <button className="button-primary" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default Actions;
