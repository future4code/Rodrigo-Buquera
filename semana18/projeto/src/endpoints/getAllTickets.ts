import { Request, Response } from "express"
import { ProductDataBase } from "../data/ProductDataBase"
import { TicketDataBase } from "../data/TicketDatabase"
import { Product } from "../entities/Product"
import { Ticket } from "../entities/Ticket"

export const getAllTickets = async (req: Request, res: Response) => {
    try {
        const td = new TicketDataBase()
        const list = await td.getAll()
        const result = list.map((i: any) => new Ticket(i.id, i.name, i.description, i.price, i.origin, i.destiny ))

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}