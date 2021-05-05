import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
	align-items: center
	
`
const IconImage = styled.img`
	margin-right: 5px;
	max-width: 1.3em;
	max-height: 1.3em;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
