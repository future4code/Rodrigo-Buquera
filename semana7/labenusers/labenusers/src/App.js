
import React from "react";
import styled from "styled-components";
import Lista from "./components/Lista/Lista";
import Inputs from "./components/Inputs/Inputs";
import User from "./components/User/User"
import axios from "axios";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

` 

export default class App extends React.Component {
  state = {
    page: "cadastro",  
    selectedUser: {}  
  };

  handlePage = () => {
    switch (this.state.page) {
        case "cadastro":
          return <Inputs/> 
        case "lista":
          return <Lista handleUser={this.handleUser} /> 
          case "user":
            return <User user={this.state.selectedUser} goToRegister={this.goToRegister}/>   
        default:
          return alert("ocorreu um erro tente novamente") 
    }
  };

  goToRegister = () => {
    this.setState({page: "cadastro"})
  }

  goToList = () => {
    this.setState({page: "lista"})
  }
 
 handleUser = (id) => {
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'
    axios.get(URL + id, { headers: { Authorization: "rodrigo-brezolin-paiva"}})
    .then((res)=>  {
      this.setState({
        selectedUser: res.data,
        page: "user"
      })
    })
    .catch((err)=> alert(err.response.data.message))  
  }

  render() {
    return (
      <MainContainer>
        <h3> Labenusers </h3>

        <div>
        <button onClick={this.goToRegister} > Ir para cadastro </button>
        <button onClick={this.goToList}  > Ir para lista </button>
        </div>
        
        <hr />
        {this.handlePage()}
        
      </MainContainer>
    );
  }
}
