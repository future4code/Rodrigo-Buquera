import { Request, Response } from "express"
import connection from "../connection"

export const createTask = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {

        const { title, description, limit_date, requesting_user } = req.body

        if (!title || !description || !limit_date || !requesting_user) {
            throw new Error("Preencha todos os campos da requisição")
        }

        const newDate: string = limit_date.split("/").reverse().join("-")

        await connection("Tasks")
            .insert({
                id: Date.now().toString(),
                title,
                description,
                limit_date: newDate,
                requesting_user
            })

        res.send("tarefa criada com sucesso")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}