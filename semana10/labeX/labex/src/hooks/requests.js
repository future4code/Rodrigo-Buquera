import React, {useState, useEffect} from "react";
import axios from "axios";

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-brezolin-paiva"
const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"

export function useTripsLists(){
    const [trips, setTrips] = useState([])
    const URL = `${baseURL}/trips`

    useEffect(() =>{
        axios.get(URL)
        .then((res) => {            
            setTrips(res.data.trips)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    return trips
    
}
