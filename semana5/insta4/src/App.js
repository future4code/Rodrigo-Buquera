import { set } from 'object-path';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerAddComemt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0px;
`

const ContainerInput = styled.div`  
  margin: 5px 0px;

  input{
    margin: 0px 2px;
  }
`
const SendButton = styled.button`  
 width: 100px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "paulinha",
        fotoUser: "https://picsum.photos/50/50",
        imagem: "https://picsum.photos/200/150"
      },
      {
        nome: 'Marquinhos',
        fotoUser: 'https://picsum.photos/200/300?random=1',
        imagem: 'https://picsum.photos/200/300?random=2'
      },
      {
        nome: 'Pets do Instagram',
        fotoUser:  'https://picsum.photos/200/300?random=3',
        imagem: 'https://picsum.photos/200/300?random=4'
      }
    ],
    newPost: {   
        // nome: '',
        // fotoUser:  '',
        // imagem: ''
      }     
  };


  onChangeNome = (event) => {
    // this.setState({newPost.nome: event.target.value})
    this.setState({newPost: {...this.state.newPost, nome: event.target.value}})
}

onChangeFoto = (event) => {
  // this.setState({fotoUser: event.target.value})
  this.setState({newPost: {...this.state.newPost, fotoUser: event.target.value}})
}

onChangeImagem = (event) => {
  // this.setState({imagem: event.target.value})
  this.setState({newPost: {...this.state.newPost, imagem: event.target.value}
  })
}

handleComments = () => {
  this.setState({
    posts: [...this.state.posts, this.state.newPost],
    newPost: {
      nome: '',
      fotoUser:  '',
      imagem: ''
    } 
  })
}

  render() {
    const postsList = this.state.posts.map((post) => {
      return (
        <Post key={post.nome}
        nomeUsuario={post.nome} 
        fotoUsuario={post.fotoUser}
        fotoPost={post.imagem}
        >       
        </Post>
      );
    })

    return (
      <MainContainer>
        <ContainerAddComemt>
        
          <ContainerInput>
          <input placeholder="nome usuário" value={this.state.newPost.nome}     onChange={this.onChangeNome} ></input>
          <input placeholder="foto usuário" value={this.state.newPost.fotoUser} onChange={this.onChangeFoto} ></input>
          <input placeholder="imagem post"  value={this.state.newPost.imagem}   onChange={this.onChangeImagem} ></input>
          </ContainerInput>
          
          <SendButton onClick={this.handleComments} >Enviar post</SendButton>
          
        </ContainerAddComemt>

        {postsList}
      </MainContainer>
    );
  }
}

export default App;
