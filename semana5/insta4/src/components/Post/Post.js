import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhado} from '../SecaoCompartilhado/SecaoCompartilhado'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhado: false
  }
  

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalva = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickCompartilha = () => {
    this.setState({
      compartilhado: !this.state.compartilhado
    })

  }

  render() {
    let iconeCurtida
    let iconeSalvo

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.salvo) {
      iconeSalvo = "https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg"
    } else {
      iconeSalvo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Check_mark_23x20_02.svg/1081px-Check_mark_23x20_02.svg.png"
    }


    let componenteComentario
    let componenteCompartilhado

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    if(this.state.compartilhado){
      componenteCompartilhado = <SecaoCompartilhado/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida} n  
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalva}
          valorContador=""
        />

        <IconeComContador
          icone={"https://pic.onlinewebfonts.com/svg/img_373601.png"}
          onClickIcone={this.onClickCompartilha}
          valorContador=""
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhado}
    </PostContainer>
  }
}

export default Post