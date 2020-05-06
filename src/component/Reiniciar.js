import React from 'react';


class Reiniciar extends React.Component {
   handleClick(event){
     event.preventDefault();
     this.props.reiniciar();
   }



  render() {
    return (
      
     <button  onClick={this.handleClick.bind(this)}> Reiniciar!! </button>
    
    );
  }
}

export default Reiniciar;
