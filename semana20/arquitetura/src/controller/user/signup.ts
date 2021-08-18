import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";

export const signup = async (req: Request, res: Response) => {
    try {
        const {email, name, password, role } = req.body
       
        const token = await signupBusiness({email, name, password, role })
       
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}