import { useTripsLists, applyToTrip } from "../../hooks/requests";
import React from "react";
import { Input, Select } from "@chakra-ui/react";
import useInput from "../../hooks/useInput";
import { CountriesList } from "../countrieslist/CountriesList";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../../route/Coordinator";
import { Button } from "@chakra-ui/react";

import {
  MainContainer,
  BoxContainer,
  ButtonsContainer,
  Title,
} from "../../constants/Styled/Styled";

export function ApplicationForm() {
  const [name, setName] = useInput("");
  const [age, setAge] = useInput("");
  const [text, setText] = useInput("");
  const [job, setJob] = useInput("");
  const [destination, setDestination] = useInput("");
  const [country, setCountry] = useInput("");

  const history = useHistory();
  const trips = useTripsLists();

  return (
    <MainContainer>
      <Select onChange={setDestination} placeholder="Escolha uma viagem">
        {trips.map((trip) => {
          return (
            <option key={trip.id} value={trip.id}>
              {trip.name}
            </option>
          );
        })}
      </Select>

      <Input value={name} onChange={setName} placeholder="Nome" />

      <Input value={age} onChange={setAge} placeholder="Idade" />

      <Input
        value={text}
        onChange={setText}
        placeholder="Texto de candidatura"
      />

      <Input value={job} onChange={setJob} placeholder="Profissão" />

      <CountriesList
        country={country}
        setCountry={setCountry}
      />

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
          onClick={() => applyToTrip(destination, name, age, text, job, country)}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Enviar
          </Button>

      </ButtonsContainer>
    </MainContainer>
  );
}
