import React from 'react'
import styled from "styled-components";
import {MainContainer, BoxContainer, ButtonsContainer, Title} from "./Styled/Styled";
import { Button, ButtonGroup } from "@chakra-ui/react";


 const HomePage = () => {
    return (
        <MainContainer>
            <BoxContainer>

                <Title>LabeX</Title>

                <ButtonsContainer>

                    <Button colorScheme="brand" size="lg" color="#251D44">
                        Lista de viagens
                    </Button>

                    <Button colorScheme="brand" size="lg" color="#251D44">
                        Login Admin
                    </Button>

                </ButtonsContainer>

            </BoxContainer>
            HomePage
        </MainContainer>
    )   
 }

 export default HomePage
  