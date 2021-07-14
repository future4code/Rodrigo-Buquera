import { Request, Response } from "express";
import { countries } from "../data"
import { country } from "../types"

export const getCountryById = (
    req: Request,
    res: Response
):void =>{

    const countryFound: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    if(countryFound){
        res.status(200).send(countryFound)
    } else{
        res.status(404).send("Deu ruim, nada foi encontrado")
    }
    
}