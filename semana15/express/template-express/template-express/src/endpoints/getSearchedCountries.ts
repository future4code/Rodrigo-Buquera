import { Request, Response } from "express";
import { countries } from "../data"
import { country } from "../types"

export const getSearchedCountries = (
    req: Request,
    res: Response
): void => {

    if (req.query.name) {
        const result = countries.filter(country =>
            String(country.name).includes(String(req.query.name).toLowerCase() as string))

        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(404).send("nada encontrado")
        }

    }

    if (req.query.capital) {
        const result = countries.filter(country =>
            String(country.capital).includes(String(req.query.capital).toLowerCase() as string))
        res.status(200).send(result)

        if (result.length) {
            res.status(200).send(result)

        } else {
            res.status(404).send("nada encontrado")
        }

    }

    if (req.query.continent) {
        const result = countries.filter(country =>
            String(country.continent).includes(String(req.query.continent).toLowerCase() as string))
        res.status(200).send(result)

        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(404).send("nada encontrado")
        }

    }

    res.status(200).send(countries)

}

