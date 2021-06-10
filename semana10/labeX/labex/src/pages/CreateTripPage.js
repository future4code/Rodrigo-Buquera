import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import {
    VertMainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
} from "../constants/Styled/Styled";
import useProtectedPage from '../hooks/useProtectedPage';
import { CreateTripForm } from '../components/createTripForm/CreateTripForm';

const CreateTripPage = () => {
    const history = useHistory();

    useProtectedPage()

    return (
        <VertMainContainer>

            <Title>Criar viagem</Title>
            <CreateTripForm />

        </VertMainContainer>
    )
}

export default CreateTripPage