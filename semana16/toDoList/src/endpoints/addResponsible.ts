import { Request, Response } from "express"
import connection from "../connection"

export const addResponsible = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const {task_id, responsible_user_id} = req.body

        if(!task_id || !responsible_user_id){
            throw new Error("preencha os cammpos da requisição")
        }
        
        await connection("Assignments")
        .insert({
            task_id: `${task_id}`,
            user_id: `${responsible_user_id}`
        })
        
        res.send("atribuições adicionadas")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}
