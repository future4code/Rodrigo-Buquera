import { Request, Response } from "express"
import selectUsersWithAll from "../querys/selectUsersWithAll"


export const getUsersWithAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const name :any = req.query.name || "%"
        const type :any  = req.query.type || "%"
        const sort = req.query.sort === "type" ? "type" : "name"
        const order = req.query.order === "ASC" ? "ASC" : "DESC" 
        const page = Number(req.query.page) || 1
        const size = Number(req.query.size) || 5

        const users = await selectUsersWithAll(name, type, sort, order, page, size)
 
        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}