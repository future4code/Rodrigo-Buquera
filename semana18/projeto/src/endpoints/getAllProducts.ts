import { Request, Response } from "express"
import { ProductDataBase } from "../data/ProductDataBase"
import { Product } from "../entities/Product"

export const getAllProducts = async (req: Request, res: Response) => {

    try {

        const orderBy : string = req.query.order === "DESC" ? "DESC" : "ASC" 

        const pd = new ProductDataBase()
        const productsList = await pd.getAll(orderBy)
        const result = productsList.map((input: any) => new Product(input.id, input.name, input.description, input.price))

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}