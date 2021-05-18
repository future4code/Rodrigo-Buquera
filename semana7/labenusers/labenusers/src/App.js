
import React from "react";
import styled from "styled-components";
import Lista from "./components/Lista/Lista";
import Inputs from "./components/Inputs/Inputs";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

` 

export default class App extends React.Component {
  state = {
    page: true,
  };

  handlePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <MainContainer>
        <h3> Labenusers </h3>
        <button onClick={this.handlePage}> Trocar usuários </button>
        <hr />
        { this.state.page === true ? <Inputs/> :  <Lista/> }
        
      </MainContainer>
    );
  }
}
