import { Request, Response } from "express";
import { countries } from "../data"
import { country } from "../types"


export const editCountryById = (
    req: Request,
    res: Response
): void => {

    try {

        if (Number(req.params.id) > 196) {
            res.statusCode = 400
            throw new Error(" id invalido")
        }


        if (!req.body.name || !req.body.capital) {
            res.statusCode = 400
            throw new Error(" sem body")
        }



        const countryFound: country | undefined = countries.find(
            country => country.id === Number(req.params.id)
        )

        if (countryFound && req.body.name) {
            countryFound.name = req.body.name
        }

        if (countryFound && req.body.capital) {
            countryFound.capital = req.body.capital
        }

        if (countryFound) {
            res.status(200).send(countryFound)
        } else {
            res.status(404).send("Deu ruim, nada foi encontrado")
        }

    } catch (err) {

        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.statusMessage = err.message
            res.send("faz as coisas direito ai")

        }

    }

}