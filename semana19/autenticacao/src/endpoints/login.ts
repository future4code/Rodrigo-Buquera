import { Request, Response } from "express";
import connection, { getUserByEmail, postUser } from "../data/connection";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { AuthenticationData, user } from "../types";

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

        const user = await getUserByEmail(email)

       
        if (!user) {
            throw new Error("usuário não encontrado");
        }
       

        if (user.password !== password) {
           
            throw new Error("senha inválida");
        }
        
        const token = generateToken(user.id)
        
        res.status(201).send({ token })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}