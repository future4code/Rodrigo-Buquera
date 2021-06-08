import React from 'react'
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from "../route/Coordinator";
import {
    MainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
  } from "./Styled/Styled";
  import { Button, ButtonGroup } from "@chakra-ui/react";
  import {ApplicationForm} from "../components/ApplicationForms/ApplicationForms"


 const ApplicationFormPage = () => {
    const history = useHistory();

    return (
        <MainContainer>
            
          <ApplicationForm/>


            <ButtonsContainer>
            <Button
            onClick={() =>  goToLastPage(history)}
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Voltar
          </Button>

          <Button
            
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Enviar
          </Button>

            </ButtonsContainer>
        </MainContainer>
    )   
 }

 export default ApplicationFormPage
 