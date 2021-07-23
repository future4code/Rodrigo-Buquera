import { Request, Response } from "express"
import connection from "../connection"

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        
        const result = await connection("Users").select("id", "nickname")

        res.send({"users": result})
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}