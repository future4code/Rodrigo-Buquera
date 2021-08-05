import { Request, Response } from "express"
import { ProductDataBase } from "../data/ProductDataBase"
import { TicketDataBase } from "../data/TicketDatabase"
import { Product } from "../entities/Product"

import { BadRequest, InvalidDate, } from "../error/customError"

export const createTicket = async (req: Request, res: Response) => {

    try {
        const { name, description, price, origin, destiny } = req.body

        if (!name || !description || !price || !origin || !destiny || price <= 0) {
            throw new BadRequest()
        }

        const id = (Date.now() * Math.random()).toString()
        const ticketId = (Date.now() * Math.random()).toString()

        const product = new Product(id, name, description, price, ticketId)

        await new TicketDataBase().addTicket(ticketId, origin, destiny)

        await new ProductDataBase().addProduct(product)

        res.status(200).send({ message: "passagem criada com sucesso" })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}