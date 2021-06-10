import React from 'react'
import { useHistory } from "react-router-dom";
import { goToLastPage, goToCreateTrip, goToAdminHome } from "../route/Coordinator";
import {
  VertMainContainer,
  BoxContainer,
  ButtonsContainer,
  Title,
} from "../constants/Styled/Styled";
import { Button } from "@chakra-ui/react";
import useProtectedPage from '../hooks/useProtectedPage';
import AdminTripsList from '../components/adminTripsList/AdminTripsList';

const AdminHomePage = () => {
  const history = useHistory();

  useProtectedPage()

  const logOut = () => {
    localStorage.setItem("token", "")
    goToAdminHome(history)
  }

  return (
    <VertMainContainer>

      <ButtonsContainer>
        <Button
          onClick={() => goToLastPage(history)}
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
          onClick={logOut}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Logout
          </Button>

        <AdminTripsList />

      </ButtonsContainer>
    </VertMainContainer>
  )
}

export default AdminHomePage
