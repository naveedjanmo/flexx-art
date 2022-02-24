import React, { useEffect, useState } from 'react';
import Actions from './components/Actions';
import EthName from './components/EthName';
import Container from './components/Container';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setWalletAddress(accounts[0]);
    }
  };

  // api
  const getNftdata = async () => {
    // if no wallet address (null) then don't run api fetch
    if (!walletAddress) return;

    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`
    );

    const data = await response.json();

    setNfts(data.items);
  };

  // update getNftdata when walletAddress changes
  useEffect(() => {
    getNftdata();
  }, [walletAddress]);

  return (
    <main>
      <header>
        <h1>
          <EthName />
        </h1>
        <Actions connectWallet={connectWallet} />
      </header>

      <section>
        <Container nfts={nfts} />
      </section>
    </main>
  );
}

export default App;
