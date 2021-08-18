import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { getData } from "../services/getData";


export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const authorization = req.headers.authorization!

        const ud = new UserDataBase()

        const auth = getData(authorization)

        if(auth.role !== "NORMAL"){
            throw new CustomError("Usuário não autorizado", 401)
        }

        const user: User = await ud.getUserByID(auth.id)

        res.status(201).send({ user })

    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

} 