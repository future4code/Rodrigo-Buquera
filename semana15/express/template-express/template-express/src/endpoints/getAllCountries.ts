import { Request, Response } from "express";
import { countries } from "../data"
import { reducedCountry } from "../types"



export const getAllCountries = (
    req: Request,
    res: Response
): void => {

    const countriesList: reducedCountry[] = countries.map(country => ({
        id: country.id,
        name: country.name,
    }))

    res.status(200).send(countriesList)
}