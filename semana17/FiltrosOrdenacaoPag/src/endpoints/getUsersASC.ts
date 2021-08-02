import { Request, Response } from "express"
import selectUsersASC from "../querys/selectUsersASC"


export const getUsersASC = async(req: Request,res: Response): Promise<void> =>{
   try {

      const sort = req.query.sort === "name" ? "name" : "type" ? "type" : "email"
      const order = req.query.order = "DESC" ? "DESC" : "ASC" 

      const users = await selectUsersASC(sort, order)

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}