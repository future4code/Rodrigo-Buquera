import { Request, Response } from "express"
import { ProductDataBase } from "../data/ProductDataBase"
import { PurchaseDataBase } from "../data/PurchaseDataBase"
import { UserDataBase } from "../data/UserDataBase"
import { Product } from "../entities/Product"
import { Purchase } from "../entities/Purchase"
import { User } from "../entities/User"

import { BadRequest, CustomError } from "../error/customError"

export const createPurchase = async (req: Request, res: Response) => {

    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new BadRequest()
        }

        const u = new UserDataBase
        const user : User[] = await u.getUserById(userId) as User[]

        if (user.length === 0) {
            throw new CustomError("usuário não encontrado", 404)
        }

        const p = new ProductDataBase
        const product : Product[] = await p.getProductById(productId) as Product[]

        if (product.length === 0) {
            throw new CustomError("produto não encontrado", 404)
        }

        const id = (Date.now() * Math.random()).toString()
        const totalValue = product[0].price * quantity

        const uId = new UserDataBase().toUserModel(user[0])
        const pId = new ProductDataBase().toProductModel(product[0])

        const purchase = new Purchase(id, uId.getID(), pId.getID(), quantity, totalValue)

        await new PurchaseDataBase().addPurchase(purchase)
       

        res.status(200).send({ message: "compra efetuada" })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}