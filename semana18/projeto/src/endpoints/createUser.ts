import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { User } from "../entities/User"
import { BadRequest, InvalidEmail } from "../error/customError"

export const createUser = async (req: Request, res: Response) => {

    try {
        const { name, email, age } = req.body

        if (!name || !email || !age) {
            throw new BadRequest()
        }

        if (email.indexOf('@') === -1) {
            throw new InvalidEmail();
        }

        const id = (Date.now() * Math.random()).toString()

        const user = new User(id, name, email, age)

        new UserDataBase().addUser(user)
        
        res.status(200).send({message:"usuário criado com sucesso"})

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}