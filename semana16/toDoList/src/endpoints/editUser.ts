import { Request, Response } from "express"
import connection from "../connection"

export const editUser = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        

        

        res.send("usuário criado com sucesso")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}