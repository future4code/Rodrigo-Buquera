import { Request, Response } from "express"
import connection from "../connection"

export const getUserbyID = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const id = req.params.id
    
        const result = await connection("Users").select("*").where({ id: id })

        if (!result.length){
            throw new Error("usuário não encontrado")
        }

        res.send(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}