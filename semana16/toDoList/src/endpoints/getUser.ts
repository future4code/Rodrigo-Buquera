import { Request, Response } from "express"
import connection from "../connection"

export const getUser = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const query = req.query.query

        if(!query){
            throw new Error("entre com uma query")
        }
    
        const result = await connection("Users")
        .select("*")
        .where("nickname", "LIKE", `%${query}%` )

        res.send(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}