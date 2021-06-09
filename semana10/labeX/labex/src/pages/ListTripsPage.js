import React from 'react'
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage, goToApplication } from "../route/Coordinator";
import {
    MainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
  } from "../constants/Styled/Styled";
  import { Button, ButtonGroup } from "@chakra-ui/react";
  import {TripsList} from "../components/TripsList/TripsList"

 const ListTripsPage = () => {
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
            onClick={() => goToApplication(history)}
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Inscrever-se
          </Button>

            </ButtonsContainer>

        <TripsList/>
       
        </MainContainer>
    )   
 }

 export default ListTripsPage
 