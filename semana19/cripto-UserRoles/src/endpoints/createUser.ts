import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { generateHash } from "../services/generateHash";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { AuthenticationData } from "../types/types";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password } = req.body
        let {role} = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'password' e 'email'")
        }

        if(role !== "NORMAL" || role !=="ADMIN" ){
            role = "NORMAL"
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("email inválido")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error(" senha muito curta")
        }

        const id = generateId()
        const hash: string = await generateHash(password)
        const user = new User(id, email, hash)

        const ud = new UserDataBase()
        const result = await ud.postUser(user)

        const token = generateToken(id, role)

        res.status(201).send({ token })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)

    }
}