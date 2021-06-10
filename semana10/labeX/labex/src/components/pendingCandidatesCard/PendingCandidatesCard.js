import styled from "styled-components";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
    MainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
    TripCard
} from "../../constants/Styled/Styled";
import { baseURL } from "../../constants/baseURL";
import axios from "axios"

export default function PendingCandidatesCard(props) {
    const candidates = props.trip.candidates;

    const decideCandidate = (id, bool) => {
        const URL = `${baseURL}/trips/${props.trip.id}/candidates/${id}/decide`
        const body = { "approve": bool }

        axios.put(URL, body, props.headers)
            .then(() => {
                if (bool) {
                    alert("Candidato aceito")
                } else {
                    alert("Candidato recusado")
                }                
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <div>
            {candidates &&
                candidates.map((candidate) => {
                    return (

                        <TripCard key={candidate.id}>
                            <p>Nome: {candidate.name} </p>
                            <p>Idade: {candidate.age} </p>
                            <p>Profissão: {candidate.profession} </p>
                            <p>País: {candidate.country}</p>
                            <p>Texto de candidatura: {candidate.applicationText}</p>

                            <ButtonsContainer>
                                <Button

                                    colorScheme="brand"
                                    size="lg"
                                    color="#251D44"
                                    onClick={() => decideCandidate(candidate.id, true)}
                                >
                                    Aprovar
                            </Button>

                                <Button

                                    colorScheme="brand"
                                    size="lg"
                                    color="#251D44"
                                    onClick={() => decideCandidate(candidate.id, false)}
                                >
                                    Reprovar
                             </Button>
                            </ButtonsContainer>
                        </TripCard>

                    );
                })}
        </div>
    );
}
