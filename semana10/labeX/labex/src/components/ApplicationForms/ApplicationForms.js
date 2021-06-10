import { useTripsLists, applyToTrip } from "../../hooks/requests";
import React from "react";
import { Input, Select } from "@chakra-ui/react";
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
import useForm from "../../hooks/useForm"

export function ApplicationForm() {
  const [form, onChange, cleanFields] = useForm({
    applicationText: "",
    profession: "",
    country: "",
    age: "",
    name: "",
    id: ""
  })

  const history = useHistory();
  const trips = useTripsLists();

  const sendForm = (event) => {
    event.preventDefault();
    applyToTrip(form)
    cleanFields();
  };

  return (
    <MainContainer>
      <form onSubmit={sendForm}>
        <Select
          name="id"
          onChange={onChange}
          placeholder="Escolha uma viagem"
          value={form.id}
          required
        >
          {trips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>
                {trip.name}
              </option>
            );
          })}
        </Select>

        <Input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
        />

        <Input
          name={"age"}
          value={form.age}
          onChange={onChange}
          type="number"
          min={18}
          placeholder="Idade"
          required
        />

        <Input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto de candidatura"
          required
          pattern={"^.{30,}"}
          title={"Deve ter no mínimo 30 caracteres"}
        />

        <Input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
          pattern={"^.{10,}"}
          title={"Deve ter no mínimo 10 caracteres"}
        />

        <CountriesList
          country={form.country}
          setCountry={onChange}
        />

        <button
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Enviar
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
