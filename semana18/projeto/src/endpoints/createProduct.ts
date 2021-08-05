import { Request, Response } from "express"
import { ProductDataBase } from "../data/ProductDataBase"
import { Product } from "../entities/Product"

import { BadRequest } from "../error/customError"

export const createProduct = async (req: Request, res: Response) => {

    try {
        const { name, description, price } = req.body

        if (!name || !description || !price || price <= 0) {
            throw new BadRequest()
        }

        const id = (Date.now() * Math.random()).toString()

        const product = new Product(id, name, description, price)

        await new ProductDataBase().addProduct(product)

        res.status(200).send({message:"produto criado com sucesso"})

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}