import { Request, Response } from "express"
import connection from "../connection"

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            throw new Error("Preencha todos os campos da requisição")
        }

        await connection("Users")
            .insert({
                id: Date.now().toString(),
                name,
                nickname,
                email
            })

        res.send("usuário criado com sucesso")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}