import { Request, Response } from "express"
import { PurchaseDataBase } from "../data/PurchaseDataBase"
import { Purchase } from "../entities/Purchase"


export const getAllPurchases = async (req: Request, res: Response) => {

    try {

        const pd = new PurchaseDataBase()
        const list = await pd.getAll()
        const result = list.map((i: any) => new Purchase(i.id, i.user_id, i.product_id, i.quantity, i.total_value))
    
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}