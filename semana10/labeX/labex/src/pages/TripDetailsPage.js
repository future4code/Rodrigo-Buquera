import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import {  } from "../route/Coordinator";
import {
    MainContainer,
    BoxContainer,
    ButtonsContainer,
    Title,
  } from "../constants/Styled/Styled";
  import { Button, ButtonGroup } from "@chakra-ui/react";
import useProtectedPage from '../hooks/useProtectedPage';
import axios from "axios"
import { baseURL } from '../constants/baseURL';
import TripDetailsCard from '../components/tripDetailsCard/TripDetailsCard';

 const TripDetailsPage = () => {
    const [trip, setTrip] = useState({});

    useProtectedPage()


    const getTripDetails = (id) => {       
        const URL = `${baseURL}/trip/${id}`
        const headers = { 
            headers: { auth: localStorage.getItem("token") }
        }
        
        axios.get(URL, headers)
        .then((res) =>{
            setTrip(res.data.trip)          
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })  
    }

    useEffect(() =>{
        // alterar ID
        getTripDetails("3waAbx9Lqs96mwVOayNT")
    }, [])

    return (
        <MainContainer>

            <TripDetailsCard trip={trip}/>

        </MainContainer>
    )   
 }

 export default TripDetailsPage