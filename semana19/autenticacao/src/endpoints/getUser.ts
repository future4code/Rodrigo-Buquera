import { Request, Response } from "express";
import connection, { getUserByEmail, getUserByID, postUser } from "../data/connection";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { getData } from "../services/getData";
import { AuthenticationData, user } from "../types";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const authorization = req.headers.authorization!
      
        const auth = getData(authorization)
        
        const user = await getUserByID(auth.id)
        
        res.status(201).send({ user })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}