import { Request, Response } from "express"
import connection from "../connection"

export const getAssignments = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const id = req.params.id

        if(!id){
            throw new Error("entre com um id de tarefa")
        }
        
       const result = await connection("Assignments")
       .select("Users.id", "nickname")
       .where("task_id", "=", `${id}`)
       .join("Users", "user_id", "=", "Users.id" )
        

       if (!result.length) {
        throw new Error("tarefas não encontradas")
    }

        res.send({"users": result})
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}
