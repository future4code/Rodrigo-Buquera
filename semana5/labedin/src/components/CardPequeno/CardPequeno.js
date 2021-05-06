import React from 'react';
import styled from 'styled-components'

const ContainerCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    

    img {
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
}
`

function CardPequeno(props) {
    return (
        <ContainerCardPequeno>
            <img src={props.imagem} />
            <p> {props.texto}</p>
        </ContainerCardPequeno>

    )
}

export default CardPequeno

