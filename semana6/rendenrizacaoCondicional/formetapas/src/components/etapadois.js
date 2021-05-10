import React from 'react';
// import styled from 'styled-components';

class EtapaDois extends React.Component {
  render(){


    return (
      <div className="App">
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

        <h3>5. Qual curso?</h3>
        <input></input>

        <h3>6. Qual a unidade de ensino?</h3>
        <input></input>

        <div><button onClick={this.props.changePage}>Próxima etapa</button></div>
    </div>
  );
}  
}

export default EtapaDois;