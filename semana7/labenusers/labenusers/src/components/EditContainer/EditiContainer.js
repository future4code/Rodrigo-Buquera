import React from "react";
import styled from "styled-components";
import axios from 'axios'

const Container = styled.div`


` 

export default class EditContainer extends React.Component {
    state ={
        name: "",
        email: ""
    }

    handleEmail = (e) => { 
        this.setState({email: e.target.value})  
    } 
    
    handleNome = (e) => { 
        this.setState({name: e.target.value})
    }
  
    saveChanges = async () => {
        const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        const Authorization = { headers: { Authorization: "rodrigo-brezolin-paiva" }
          }
       try {
            const response = await axios.put(URL+this.props.user.id, body, Authorization)
            alert("usúario(a) alterado(a) com sucesso")
            {this.props.edit()}
       } catch (err) {
            alert (err.response.data.message)
       }
    }

    render (){
        
        return <Container>
                <p>Faça suas edições:</p>

                <input 
                placeholder="nome" 
                value={this.state.name}
                onChange={this.handleNome}
                ></input>

                <input 
                placeholder="email" 
                value={this.state.email}
                onChange={this.handleEmail}
                ></input>
                <button onClick={this.saveChanges}> Salvar </button>
        </Container>


        
    }
 }