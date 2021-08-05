import { Request, Response } from "express"
import { PurchaseDataBase } from "../data/PurchaseDataBase"
import { UserDataBase } from "../data/UserDataBase"
import { Purchase } from "../entities/Purchase"
import { User } from "../entities/User"
import { getPurchasesByUserId } from "./getPurchasesByUserId"

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const ud = new UserDataBase()
        const usersList = await ud.getAll()
    
        res.status(200).send(usersList)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}