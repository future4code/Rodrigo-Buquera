import React from 'react'
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage, goToCreateTrip } from "../route/Coordinator";
import {
    MainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
  } from "./Styled/Styled";
  import { Button, ButtonGroup } from "@chakra-ui/react";


 const AdminHomePage = () => {
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
            onClick={() => goToCreateTrip(history)}
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Criar viagem
          </Button>

          <Button
            
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Logout
          </Button>

            </ButtonsContainer>
        </MainContainer>
    )   
 }

 export default AdminHomePage
 