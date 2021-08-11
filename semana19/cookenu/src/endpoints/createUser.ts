import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError } from "../error/customError";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

     
        const { name, email, password } = req.body
        let { role } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'password' e 'email'")
        }

        if (role !== "NORMAL" && role !== "ADMIN") {
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

        const auth = new Authenticator()
        const hash = new HashManager()
        const genId = new IdGenerator()

        const id = genId.generateId()
        const hashPassword: string = await hash.generateHash(password)
        const user = new User(id, name, email, hashPassword, role)

        const ud = new UserDataBase()
        const newUser = await ud.postUser(user)


        const authData: AuthenticationData = { id, role }
        const token = auth.generateToken(authData)

        res.status(201).send({ token })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)

    }
}