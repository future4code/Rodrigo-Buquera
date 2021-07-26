import { Request, Response } from "express"
import selectAllUsers from "../querys/selectAllUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {

      const name : any = req.query.name || "%"

      const users = await selectAllUsers(name)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}