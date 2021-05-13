import React from 'react';
// import styled from 'styled-components';

class EtapaTres extends React.Component {
  render(){


    return (
      <div className="App">
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

        <h3>5. Por que você não terminou um curso de graduação?</h3>
        <input></input>

        <h3>6. Você fez algum curso complementar?</h3>
        <select>
          <option value="nenhum">Nenhum</option>
          <option value="tecnico">Curso técnico </option>
          <option value="ingles">Curso de inglês</option>
        </select>

        <div><button onClick={this.props.changePage}>Próxima etapa</button></div>
    </div>
  );
}  
}

export default EtapaTres;