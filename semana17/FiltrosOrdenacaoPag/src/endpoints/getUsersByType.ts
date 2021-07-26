import { Request, Response } from "express"
import selectUsersByType from "../querys/selectUsersByType"

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
   try {

      const type : any = req.params.type || "%"

      const users = await selectUsersByType(type)

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}