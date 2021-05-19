import axios from "axios";
import React from "react";
import styled from "styled-components";


const ListaContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 0.1em;
margin: 0.2em;

` 

const ContainerBusca = styled.div`

` 

export default class Lista extends React.Component {
state = {
  userList: [],  
  busca: false,
  inputBusca: "",
  resultadoBusca: {}
}

componentDidMount(){
  this.getUsers();
}

getUsers = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {Authorization: "rodrigo-brezolin-paiva" }}
  ).then((res) => {
      this.setState({userList: res.data})
      this.getUsers(); 
   }).catch((err => {
     alert(err.response.data.message)
   }))
  }

  handleBusca = () => {
    this.setState({busca: !this.state.busca})
  }

  handleinputBusca = (e) => {
    this.setState({inputBusca: e.target.value})
  }

  buscaUser = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name="
    axios.get(URL+this.state.inputBusca, {headers: {Authorization: "rodrigo-brezolin-paiva" 
  }}).then((res)=>{
      this.setState({
        resultadoBusca: res.data,
        inputBusca: ""
      })
    }).catch((err)=>{ alert("nenhum resultado encontrado")})
  }

  render() {
    const ListaUsuarios = this.state.userList.map((user) => {
      return <ListaContainer key={user.id}> 
        <p onClick={() => this.props.handleUser(user.id)}> {user.name} </p>        
      </ListaContainer>
    } )
    
    return <div>  
      <button onClick={this.handleBusca} >Buscar usuário</button> 
      <p>Usuários:</p>  
      {this.state.busca ?  
        <ContainerBusca>
            <p>Digite o nome do(a) usúario(a)</p>
            <input
              placeholder="nome"
              value={this.state.inputBusca}
              onChange={this.handleinputBusca}
            ></input>
            <button onClick={this.buscaUser} >Buscar</button>

           <div> Resultado da busca: {this.resultado} </div>            
        </ContainerBusca> 
        : 
        ListaUsuarios}        
      </div>;
  }
}
