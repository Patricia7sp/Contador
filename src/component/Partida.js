import React from 'react';
import Reiniciar from './Reiniciar';

class Partida extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.estadio} </h2>
        <div>
          <span> {this.props.data}</span>
          
          <span> {this.props.horario} </span>
          <span> {this.props.reiniciar} </span>
          

          <h2>
          <Reiniciar   reiniciar={this.props.reiniciar}/>
          </h2>
    
        </div>
      </div>
    );
  }
}

export default Partida;