import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError, Unauthorized } from "../error/customError";
import { Authenticator } from "../services/Authenticator";

export default async function getUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const authorization = req.headers.authorization!

        if(!authorization){
            throw new Unauthorized
        }

        const ud = new UserDataBase()
        const auth = new Authenticator().getData(authorization)

        if(auth.role !== "NORMAL"){
            throw new CustomError("Usuário não autorizado", 401)
        }

        const user: User = await ud.getUserByID(auth.id)
        
        res.status(201).send({ user })

    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

} 