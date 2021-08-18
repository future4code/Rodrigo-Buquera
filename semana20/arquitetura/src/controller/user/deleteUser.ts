import { Request, Response } from "express";
import { deleteUserBusiness } from "../../business/user/deleteUserBussiness";
import { getAllUsersBusiness } from "../../business/user/getAllUsersBussines";

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization! 

        const users = await deleteUserBusiness(token)

        res.status(200).send({ message: "Usuário deletado" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

