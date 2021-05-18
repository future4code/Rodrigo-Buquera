import axios from "axios";
import React from "react";
import styled from "styled-components";


const ListaContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

` 


export default class Input extends React.Component {
state = {
  userList: []
}

componentDidMount(){
  this.getUsers();
}

componentDidUpdate(){
  this.getUsers();
}

deleteUser = (id) => {
  const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'

  axios.delete(URL + id, {
    headers: {
      Authorization: "rodrigo-brezolin-paiva"
    }
  })
  .then(()=> alert("usuário deletado"))
  .catch(()=> alert("erro ao deletar"))
 
}

getUsers = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
      Authorization: "rodrigo-brezolin-paiva"
    }
  }
  ).then((res) => {
      this.setState({userList: res.data})
   }).catch((err => {
     alert("deu ruim")
   }))

  }

  render() {
    const ListaUsuarios = this.state.userList.map((user) => {
      return <ListaContainer>
        <li> {user.name} </li>        
        <button onClick={()=> this.deleteUser(user.id)} >Excluir</button>
      </ListaContainer>
    } )

    return <div>     
      {ListaUsuarios}
      </div>;
  }
}
