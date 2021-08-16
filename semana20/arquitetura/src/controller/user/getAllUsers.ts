import { Request, Response } from "express";
import { getAllUsersBusiness } from "../../business/user/getAllUsersBussines";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization! 

        const users = await getAllUsersBusiness(token)

        res.status(200).send({ users });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

