import { Request, Response } from "express";
import { countries } from "../data"
import { country } from "../types";

export const deleteCountry = (
    req: Request,
    res: Response
): void => {

    try {

        if (!req.headers.authorization) {
            res.statusCode = 401
            throw new Error("insira um token")
        }
        if (Number(req.headers.authorization.length) < 10) {
            res.statusCode = 401
            throw new Error("insira um token com no mínimo 10 digitos ")
            // não rolou
        }
        if (req.headers.authorization !== "hsoeu460173") {
            res.statusCode = 401
            throw new Error("token enválido")
        }

        const index: number = countries.findIndex(
            country => country.id === Number(req.params.id)
        )

        if (!req.body){
            res.statusCode = 400
            throw new Error("insira um body")
            // não ta rolando
        }

        // const newCountry : country = 
        
        // newCountry.name = req.body.name,

        //     {
        //         "name": req.body.name,
        //         "capital": req.body.capital,
        //         "continent": req.body.continent
        // }
             
        

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.statusMessage = error.message
            res.end()
        }
    }
}