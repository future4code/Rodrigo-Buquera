import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "../error/customError";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'password' e 'email'")
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("email inválido")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error(" senha muito curta")
        }
        const ud = new UserDataBase()
        const user = await ud.getUserByEmail(email)

        if (!user) {
            throw new Error("usuário não encontrado");
        }

        const hash = new HashManager()
        const comparePassword = await hash.verifyHash(password, user.password)

        if (!comparePassword) {
            throw new CustomError("senha inválida", 401);
        }

        const auth = new Authenticator()
        const payload: AuthenticationData = {id: user.id, role: user.role}
        const token = auth.generateToken(payload)

        res.status(201).send({ token })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
} 