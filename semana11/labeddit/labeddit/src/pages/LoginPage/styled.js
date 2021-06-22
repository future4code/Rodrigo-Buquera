import styled from "styled-components"
import {secundaryColor} from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
`
export const LoginForm = styled.form`
display: flex;
flex-direction:column;
align-items:center;
gap: 1em;
`
export const BoxContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding: 1em;
background-color: ${secundaryColor};
margin-top: 2em;
border-radius:25px;
`