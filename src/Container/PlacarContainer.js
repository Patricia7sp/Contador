import React from 'react';
import Time from '../component/Time';
import Partida from '../component/Partida';
import PropTypes from 'prop-types';


class PlacarContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      gols_casa: 0,
      gols_visitante: 0,
      reiniciar_partida: 0,
    };  
  }

  marcarGolCasa(){
     this.setState({
       gols_casa: this.state.gols_casa + 1,

     });

  }

  marcarGolVisitante(){
    this.setState({
       gols_visitante: this.state.gols_visitante + 1,
    });
  }

  reiniciar () {

    this.setState({
      reiniciar_partida: this.state.reiniciar_partida = 0,

    });
  }

  render() {
    const {partida, casa, visitante} = this.props;
    return (
      <div>
        <div>
          <h2>Casa</h2>
          <Time nome={casa.nome } 
                gols={this.state.gols_casa}
                marcarGol={this.marcarGolCasa.bind(this)}/>
        <div>
          <Partida {...partida}partida={this.state.reiniciar_partida} reiniciar={this.reiniciar.bind(this)}/>
        </div>
        <div>
          <h2> Visitante </h2>
          <Time nome={visitante.nome} 
               gols={this.state.gols_visitante}
               marcarGol={this.marcarGolVisitante.bind(this)}/>
        </div>
        
        </div>
        <di>{this.props.clima}</di>
      </div>
    );
  }
}

export default PlacarContainer ;

PlacarContainer.propTypes= {
  clima: PropTypes.string,
  tempo: PropTypes.number.isRequired,
};

PlacarContainer.defaultProps ={
  clima: 'Ensolarado',

};