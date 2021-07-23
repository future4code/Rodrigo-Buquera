import { Request, Response } from "express"
import connection from "../connection"

export const getTasksByUser = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const id = req.query.creatorUserId

        if(!id){
            throw new Error("usuario onão encontrados")
        }
        
        const result = await connection("Tasks")
        .select(
         "Tasks.id", 
         "title", 
         "description", 
         `limit_date`,
         "status", 
         "requesting_user", 
         "nickname" )
        .where({requesting_user: `${id}`})
        .join("Users", "Users.id", "=", "requesting_user")
        

        if (!result.length) {
            throw new Error(" tarefas não encontradas")
        }
           
        res.send({"tasks":result})
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
    }

}



