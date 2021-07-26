import { Request, Response } from "express"
import selectUserBypage from "../querys/selectUserBypage"


export const getUserbyPage = async (req: Request, res: Response): Promise<void> => {
    try {

        const page = Number(req.query.page) || 1

        const users = await selectUserBypage(page)

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}