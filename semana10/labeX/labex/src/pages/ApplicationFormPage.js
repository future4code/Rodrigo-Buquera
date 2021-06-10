import React from 'react'
import {
  VertMainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
  } from "../constants/Styled/Styled";
  import {ApplicationForm} from "../components/ApplicationForms/ApplicationForms"

 const ApplicationFormPage = () => {
    return (
        <VertMainContainer>

          <Title>Inscreva-se para uma viagem</Title>
          <ApplicationForm />
           
        </VertMainContainer>
    )   
 }

 export default ApplicationFormPage
 