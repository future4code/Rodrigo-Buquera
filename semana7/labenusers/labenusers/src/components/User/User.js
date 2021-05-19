import React from "react";
import styled from "styled-components";
import axios from 'axios'
import EditContainer from '../EditContainer/EditiContainer'

const UserContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;

` 


export default class User extends React.Component {
  state = {
    edit: false, 
    user: this.props.user
  }

    setEdit = () => {
        this.setState({edit: !this.state.edit})
    }

  deleteUser = (id) => { 
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'
  
    if (window.confirm("Deseja excluir o(a) usuário(a)")){
      axios.delete(URL + id, { headers: { Authorization: "rodrigo-brezolin-paiva"}})
      .then(()=> alert("usuário(a) deletado(a) "))
      .catch((err)=> alert(err.response.data.message))
    }
  }

  render() {

    return  <div>    
        <UserContainer>
            <p> Nome: {this.state.user.name}</p> 
            <p> Email: {this.state.user.email}</p>             
            <button onClick={()=> this.deleteUser(this.state.user.id)}>Excluir</button>
            <button onClick={this.setEdit}>Editar</button>  
            {this.state.edit && <EditContainer user={this.props.user} edit={this.setEdit} />}          
        </UserContainer>
            <button onClick={this.props.goToRegister}>Voltar</button>
    </div>
  }
}
