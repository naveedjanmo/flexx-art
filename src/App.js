import React from 'react';
import Actions from './components/Actions';
import EthName from './components/EthName';
import Card from './components/Card';

function App() {
  return (
    <main>
      <header>
        <h1>
          <EthName />
        </h1>
        <Actions />
      </header>

      <section>
        <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}

export default App;
