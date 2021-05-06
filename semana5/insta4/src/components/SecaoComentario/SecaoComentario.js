import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
const AddedCommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 1px;
	margin: 1px;
`

// const ContainerComentario = styled.div`
// display: flex;
// `


export class SecaoComentario extends Component {
	state = {
		valorInput: "",
		commentList: []

	}

	onChangeComentario = (event) => {
		this.setState({ valorInput: event.target.value })
		console.log(this.state.valorInput)
	}

	onClickAddComment = (event) => {
		this.setState({ commentList: [...this.state.commentList, this.state.valorInput], valorInput: "" })
	}



	render() {

		const listacomentario = this.state.commentList.map((post) => {
			return (
				<p key={post} > {post} </p>
			)
		})

		return <CommentContainer>
			<addedCommentContainer>

				{listacomentario}
			</addedCommentContainer>

			<div>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.valorInput}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.onClickAddComment}>Enviar</button>
			</div>
		</CommentContainer>
	}
}
