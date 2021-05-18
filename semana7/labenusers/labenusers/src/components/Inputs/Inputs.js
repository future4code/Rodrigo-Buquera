import React from "react";
import styled from "styled-components";
import axios from 'axios'

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

` 

export default class Input extends React.Component {
  state = {
    inputName: "",
    inputEmail: ""
  }

  handleEmail = (e) => { 
      this.setState({inputEmail: e.target.value})
     // this.setState({inputEmail: ""})  
}
  
  handleNome = (e) => { 
      this.setState({inputName: e.target.value})
     // this.setState({inputName: "")  
    }

  criaUser = () => {
      const body = {
        name: this.state.inputName,
        email: this.state.inputEmail,
      }

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers: {
              Authorization: "rodrigo-brezolin-paiva"
          }
      }).then((res) => {  
          alert("sucesso")  
        }).catch((err) => {
            alert("errouuuu!!!")
        })                
  }

  render() {
    return <InputContainer>
    
          <h4>Criar usuários</h4>
          <div>
          <input placeholder="nome" value={this.state.inputName} onChange={this.handleNome}/>
          <input placeholder="email" value={this.state.inputEmail} onChange={this.handleEmail} />
          <button onClick={this.criaUser} > Criar </button>
          </div>
      
      </InputContainer>;
  }
}
