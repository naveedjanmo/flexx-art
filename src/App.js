import React, { useEffect, useState } from 'react';
import Actions from './components/Actions';
import EthName from './components/EthName';
import Container from './components/Container';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [nfts, setNFTs] = useState([]);

  const connectWallet = async function () {
    let a = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccounts(a);
  };

  async function getNFTdata() {
    const response = await fetch(
      `https://api.opensea.io/api/v1/assets?owner=0x8657A1fc66eDFEBba90884F8Efb644264b1497D1&order_direction=desc&offset=0&limit=50`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'X-API-KEY': '48e2e9a6da014248aa6aeac30f9ecd41',
        },
      }
    );

    const data = await response.json();

    debugger;

    setNFTs(data.assets);
  }

  useEffect(() => {
    getNFTdata();
  }, [accounts]);

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
