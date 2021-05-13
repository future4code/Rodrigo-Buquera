import React from 'react';
// import styled from 'styled-components';

class EtapaUm extends React.Component {
  state = {
    escolaridade: "",
  }

  // armazenaEscolaridade = (event) => {
  //   this.setState({ escolaridade: event.target.value })
  //   // const nivelEscolaridade = this.state.escolaridade 

  // }

  render() {

  const  nivelEscolaridade = this.state.escolaridade 
  //  console.log(nivelEscolaridade)
    return (
      <div className="App">
        <h1>ETAPA1: Dados gerais</h1>

        <h3>1. Qual o seu nome?</h3>
        <input></input>

        <h3>1. Qual a  sua idade?</h3>
        <input></input>

        <h3>1. Qual o email?</h3>
        <input></input>

        <h3>1. Qual a sua escolaridade?</h3>
        <select onChange={ this.props.armazenaEscolaridade}>
          <option value="medioIncompleto">Ensino Médio Incompleto</option>
          <option value="medioCompleto">Ensino Médio Completo</option>
          <option value="superiorIncompleto">Ensino Superior Incompleto</option>
          <option value="superiorCompleto">Ensino Superior Completo</option>

        </select>
        <div><button onClick={() => {this.props.changePage(this.props.nivelEscolaridade)}}  >Próxima etapa</button></div>

      </div>

    );
  }

}
  export default EtapaUm;