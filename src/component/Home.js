import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Home () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Bem Vindo ao Placar das Olimpiadas!</h1>
        </header>
      </div>
    );
}

export default Home;
