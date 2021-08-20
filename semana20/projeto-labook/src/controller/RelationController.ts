
import { Request, Response } from "express"
import { RelationsBusiness } from "../business/RelationsBusiness"
import { relationsDataDTO } from "../model/Relations"

const relationBusiness = new RelationsBusiness()

export class RelationsController {

    public async befriend(req: Request, res: Response): Promise<void> {
        try {
            const input: relationsDataDTO = {    
                friendId: req.body.friendId,
                token: req.headers.authorization!
            }

            await relationBusiness.befriend(input)

            res.status(201).send({ message: "Amizade feita" })
        } catch (error) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage) 
        }
    }

    public async unfriend(req: Request, res: Response): Promise<void> {
        try {
            const input: relationsDataDTO = {    
                friendId: req.body.friendId,
                token: req.headers.authorization!
            }

            await relationBusiness.unfriend(input)

            res.status(201).send({ message: "Amizade desfeita" })
        } catch (error) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage) 
        }
    }

   

}