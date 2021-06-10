import { useTripsLists, createTrip } from "../../hooks/requests";
import React, { useEffect } from "react";
import { Input, Select } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../../route/Coordinator";
import { Button } from "@chakra-ui/react";
import {
  MainContainer,
  BoxContainer,
  ButtonsContainer,
  Title,
} from "../../constants/Styled/Styled";
import useForm from "../../hooks/useForm"
import { PlanetsList } from "../planetsList/PlanetsList";


export function CreateTripForm() {
  const [form, onChange, cleanFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const history = useHistory();
  const trips = useTripsLists();

  const submitCreation = (event) => {
    event.preventDefault();
    createTrip(form)
    cleanFields();
  };

  const date = new Date();


  return (
    <MainContainer>
      <form onSubmit={submitCreation}>

        <Input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome da viagem"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
        />

        <PlanetsList
          planet={form.planet}
          onChange={onChange}
        />

        <Input
          name={"date"}
          value={form.date}
          onChange={onChange}
          type="date"
          min={date}
          required
        />

        <Input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title={"Deve ter no mínimo 30 caracteres"}
        />

        <Input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          type="number"
          min={50}
          required
          placeholder="Duração"
        />

        <button
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Criar
          </button>
      </form>

      <ButtonsContainer>
        <Button
          onClick={() => goToLastPage(history)}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Voltar
          </Button>

      </ButtonsContainer>
    </MainContainer>
  );
}
