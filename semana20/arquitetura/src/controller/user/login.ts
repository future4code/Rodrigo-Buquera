import { Request, Response } from "express";
import { loginBusiness } from "../../business/user/loginBusiness";
import { signupBusiness } from "../../business/user/signupBusiness";

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password } = req.body
        const token = await loginBusiness({email, password })

        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

