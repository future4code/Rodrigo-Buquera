import React from 'react';
import styled from 'styled-components'


const ContactCardContainer = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ContactPictures = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const ContactName = styled.h4`
     margin-bottom: 15px;
`

function ContactCard(props) {
    return (
        <ContactCardContainer>
            <ContactPictures src={props.picture} />
            <ContactContainer>
                <ContactName>{props.name} </ContactName>
                <p>{props.text}</p>
            </ContactContainer>
        </ContactCardContainer>



    )
}

export default ContactCard