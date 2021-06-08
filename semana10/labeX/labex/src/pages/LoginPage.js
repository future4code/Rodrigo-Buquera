import React from 'react'
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage, goToAdminHome } from "../route/Coordinator";
import {
    MainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
  } from "./Styled/Styled";
  import { Button, ButtonGroup } from "@chakra-ui/react";


 const LoginPage = () => {
    const history = useHistory();

    return (
        <MainContainer>
            

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
            onClick={() => goToAdminHome(history)}
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Entrar
          </Button>

            </ButtonsContainer>
        </MainContainer>
    )   
 }

 export default LoginPage
 