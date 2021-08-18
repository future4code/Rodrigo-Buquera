
import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { userDataDTO, userLoginDTO } from "../model/User";

const userBusiness = new UserBusiness()

export class UserController {

    public async signup(req: Request, res: Response): Promise<void> {
        try {
            const input: userDataDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.signup(input)

            res.status(201).send({ message: "Usuário criado com sucesso", token })
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const input: userLoginDTO = {
                email: req.body.email,
                password: req.body.password
            }
     
            const token = await userBusiness.login(input)

            res.status(201).send({ token })
        } catch (error) {
            throw new Error(error.message);
        }
    }

}