import { Request, Response } from "express"
import connection from "../connection"

export const editUser = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const id = req.params.id
        const { name, nickname, } = req.body

        if (!name || !nickname) {
            throw new Error("Preencha todos os campos da requisição")
        }

       const result = await connection("Users")
            .update({
                name,
                nickname,
            })
            .where({ id: id })

        if (!result) {
            throw new Error("usuário não encontrado")
        }

        res.send("usuário editado com sucesso")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}