import styled from "styled-components";
import { useTripsLists, deleteTrip } from "../../hooks/requests";
import React from "react";
import { Button } from "@chakra-ui/react";
import { goToTripsDetails } from "../../route/Coordinator";
import { useHistory } from "react-router-dom"

const AdminList = styled.div`
    display: flex;
    border: 1px solid black;
`

export default function AdminTripsList() {
  const trips = useTripsLists();
  const history = useHistory()

  return (
    <div>
      {trips.length !== 0
        ?
        trips.map((trip) => {
          return (
            <AdminList key={trip.id}>
              <p onClick={() => { goToTripsDetails(history, trip.id) }} > Nome:{trip.name}</p>
              <Button
                onClick={() => deleteTrip(trip.id)}
              >X</Button>
            </AdminList>
          );
        })
        : 
        <p> Não há viagens disponíveis </p>
      }
    </div>
  );
}
