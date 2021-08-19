import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { postDataDTO, postIdDTO } from "../model/Post"

const postBusiness = new PostBusiness()

export class PostController {

    public async createPost(req: Request, res: Response): Promise<void> {
        try {

            const input: postDataDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token: req.headers.authorization!
            }

            await postBusiness.createPost(input)

            res.status(201).send({ message: "Post criado com sucesso" })
        } catch (error) {
            res.status(404).send(error.message || error.sqlMessage)
        }
    }

    public async findById(req: Request, res: Response): Promise<void> {
        try {
            const input :postIdDTO = { 
                id: req.params.id, 
                token: req.headers.authorization!
            }
           
            const post = await postBusiness.findById(input)

            res.status(201).send({ post })
        } catch (error) {
            res.status(404).send(error.message || error.sqlMessage)
        }
    }

}