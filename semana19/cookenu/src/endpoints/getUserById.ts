import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError, InvalidRequest, Unauthorized } from "../error/customError";
import { Authenticator } from "../services/Authenticator";

export default async function getUserByID(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const authorization = req.headers.authorization!
        const id = req.params.id

        if(!authorization){
            throw new CustomError("esse endpoint precisa de autorização", 401)
        }

        if(!id){
            throw new InvalidRequest
        }

        const ud = new UserDataBase()
        const auth = new Authenticator().getData(authorization)

        if(auth.role !== "ADMIN"){
            throw new Unauthorized
        }

        const user: User = await ud.getUserByID(id)

        const result = {
            id: user.id,
            name: user.name,
            email: user.email
        }

        
        res.status(201).send({response: result})

    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

} 