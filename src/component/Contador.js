import React from 'react';


class Contador extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  decrement () {

    this.setState ({
      contador: this.state.contador - 1,
    });
  }
  
  increment () {
    
    this.setState ({
      contador: this.state.contador + 1,
    });
  }
 


  render() {
    return(
      <div>
        <h1> {this.state.contador} </h1>
        <div>
        
          <button className= "Contador" onclick={() =>this.decrement.bind(this)}> - </button>  
          <button className= "Contador"onclick={() =>this.increment.bind(this)}> + </button>            
        </div>
      </div>
    );

  }
}

export default Contador;