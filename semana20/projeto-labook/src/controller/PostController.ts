import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { postDataDTO } from "../model/Post"

const postBusiness = new PostBusiness()

export class UserController {

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
            throw new Error(error.message);
        }
    }

    public async findById(req: Request, res: Response): Promise<void> {
        try {
            const id = { id: req.params.id }

            const post = await postBusiness.findById(id)

            res.status(201).send({ post })
        } catch (error) {
            throw new Error(error.message);
        }
    }

}