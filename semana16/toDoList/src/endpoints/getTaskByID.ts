import { Request, Response } from "express"
import connection from "../connection"

export const getTasksByID = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const id = req.params.id

        const result = await connection.raw(`
         SELECT 
         Tasks.id, 
         title, 
         description, 
         DATE_FORMAT( limit_date, "%d/%m/%Y") AS limit_date,
         status, 
         requesting_user, 
         nickname   
         FROM Tasks
         JOIN Users
         ON requesting_user = Users.id
         WHERE Tasks.id = "${id}"
        `)

        if (!result.length) {
            throw new Error("tarefa não encontrada")
        }



        // const date = await connection.raw(`
        // SELECT DATE_FORMAT(
        //     limit_date,
        //     "%d/%m/%Y"
        // ) 
        // FROM Tasks
        // WHERE Tasks.id = "${id}";`


        // const {day, month, year} = result[0][0].limit_date.toString().split("-")

        // result[0][0].limit_date = `${year}/${month}/${day}`

        res.send(result[0][0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}



