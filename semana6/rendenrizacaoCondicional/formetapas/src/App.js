import './App.css';
import React from 'react';
import EtapaUm from './components/etapaum';
import EtapaFinal from './components/etapafinal';
import EtapaTres from './components/etapatres';
import EtapaDois from './components/etapadois';
// import styled from 'styled-components';

class App extends React.Component {
  state = {
    etapa: 1,
    escolaridade: "teste",
  }

  armazenaEscolaridade = (event) => {
    this.setState({ escolaridade: event.target.value })

  }

  changePage = (nivelEscolaridade) => {
    console.log(nivelEscolaridade)

    switch (this.state.etapa) {
      case 1:
        // return (nivelEscolaridade === "superiorCompleto" || nivelEscolaridade === "superiorIncompleto") ?
        //   this.setState({ etapa: 2 }) : this.setState({ etapa: 3 });
          return this.setState({ etapa: 2 });
      case 2:
        return this.setState({ etapa: 3 });
      case 3:
        return this.setState({ etapa: 4 });
        ;
      default:
        return <p>Erro função: faça uma pausa</p>
    }
  }

  render() {
    // console.log(this.state.escolaridade)

    const renderPage = () => {
      switch (this.state.etapa) {
        case 1:
          return <EtapaUm changePage={() => { this.changePage(this.state.escolaridade) }} />;
        case 2:
          return <EtapaDois changePage={() => { this.changePage(this.state.escolaridade) }} />;
        case 3:
          return <EtapaTres changePage={() => { this.changePage(this.state.escolaridade) }} />;
        case 4:
          return <EtapaFinal />;
        default:
          return <p>Erro: faça uma pausa</p>
      }

    }
    return (
      <div className="App"> {renderPage()}</div>
    );
  }
}

export default App;
