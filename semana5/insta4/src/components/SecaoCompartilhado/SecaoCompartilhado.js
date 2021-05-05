import React, {Component} from 'react'
import styled from 'styled-components'

const CommentCompartilhado = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
`

const Icones = styled.img`
	margin-right: 5px;
	max-width: 1.3em;
	max-height: 1.3em;
`

export class SecaoCompartilhado extends Component {
	state = {
		valorInput: ""
	}

    onClickInstagram =() => {
        console.log("você compartilhou no Instagram")
    }

    onClickFacebook =() => {
        console.log("você compartilhou no facebook")
    }

    onClickTwiter =() => {
        console.log("você compartilhou no twiter")
    }

	render() {
		return <CommentCompartilhado>
			<Icones alt={'Icone'} src={"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"} onClick={this.onClickInstagram} />
            <Icones alt={'Icone'} src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"} onClick={this.onClickFacebook} />
            <Icones alt={'Icone'} src={"https://upload.wikimedia.org/wikipedia/pt/3/3d/Twitter_logo_2012.svg"} onClick={this.onClickTwiter} />            				
		</CommentCompartilhado>
	}
}