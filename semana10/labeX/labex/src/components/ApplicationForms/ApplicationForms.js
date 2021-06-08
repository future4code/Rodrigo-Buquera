import styled from "styled-components";
import { useTripsLists } from "../../hooks/requests";
import React from "react";
import { Input, Select } from "@chakra-ui/react";
import useInput from "../../hooks/useInput";

export function ApplicationForm() {
  const [name, setName] = useInput("");
  const [age, setAge] = useInput("");
  const [text, setText] = useInput("");
  const [job, setJob] = useInput("");
  const [destination, setDestination] = useInput("");
  const [country, setCountry] = useInput("");

  const trips = useTripsLists();

  return (
    <div>
      <Select onChange={setDestination} placeholder="Escolha uma viagem">
        {trips.map((trip) => {
          return (
            <option key={trip.id} value={trip.name}>
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

      <Select
        value={country}
        onChange={setCountry}
        placeholder="Escolha um pais"
      />
    </div>
  );
}
