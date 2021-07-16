import { Request, Response } from "express";
import { countries } from "../data"

export const postCountry = (
    req: Request,
    res: Response
): void => {

    try {

        if (!req.headers.authorization) {
            res.statusCode = 401
            throw new Error("insira um token")
        }
        
        if (req.headers.authorization !== "hsoeu460173") {
            res.statusCode = 401
            throw new Error("token enválido")
        }

       
        

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.statusMessage = error.message
            res.end()
        }
    }
}