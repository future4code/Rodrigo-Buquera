import { Request, Response } from "express"
import { PurchaseDataBase } from "../data/PurchaseDataBase"
import { UserDataBase } from "../data/UserDataBase"
import { Purchase } from "../entities/Purchase"
import { User } from "../entities/User"
import { CustomError } from "../error/customError"


export const getPurchasesByUserId = async (req: Request, res: Response) => {

    try {

        const id = req.params.id.toString() 

        const u = new UserDataBase
        const user : User[] = await u.getUserById(id) as User[]

        if (user.length === 0) {
            throw new CustomError("usuário não encontrado", 404)
        }

        const pd = new PurchaseDataBase()
        const list = await pd.getByUserId(id)
        const result = list.map((i: any) => new Purchase(i.id, i.user_id, i.product_id, i.quantity, i.total_value))
        
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}