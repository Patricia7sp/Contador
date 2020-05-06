import React from 'react';
import Home from '../component/Home';
import PlacarContainer from '../Container/PlacarContainer';
 


const dados = {
  partida: {
     estadio: "Morumbi/SP",
     data: "30/06/2014",
     Hora: "18hrs",
  },

  casa: {
    nome: "Brasil",

  },

  visitante: {
    
    nome: "Argentina",
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <PlacarContainer {...dados} tempo={92} />

      </div>
    );
  }
}

export default App;
