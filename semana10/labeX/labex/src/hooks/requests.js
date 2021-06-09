import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import { goToAdminHome } from "../route/Coordinator";
import {baseURL} from '../constants/baseURL';

export function useTripsLists() {
    const [trips, setTrips] = useState([])
    const URL = `${baseURL}/trips`
    const history = useHistory()

    useEffect(() => {
        axios.get(URL)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }, [])

    return trips
}

export const applyToTrip = (destination, name, age, text, job, country) => {
    const URL = `${baseURL}/trips/${destination}/apply`
    const body = {
        "name": name,
        "age": age,
        "applicationText": text,
        "profession": job,
        "country": country,
    }

    axios.post(URL, body)
        .then(() => {
            alert("Inscrição feita com sucesso")
        })
        .catch((err) => {
            alert(err.message)
        })
}

