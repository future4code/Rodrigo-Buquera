import { Request, Response } from "express";
import { Users } from "../types";
import { users } from "../users";

export const getBalance = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400
    const { name, CPF } = req.query

    try {

        if (!name || !CPF) {
            res.status(200).send(users)
        }

        const account: Users | undefined = users.find(user => user.CPF === CPF)
        if(!account){
            errorCode=404
            throw new Error(" usuário não encontrado ")
        }     
        
        if (account.name !== name){
            errorCode=404
            throw new Error(" o nome não consta no sistema")
        }
      
        res.status(200).send(`seu saldo é ${account.balance}`)


    } catch (error) {
        res.status(errorCode).send({ message: error.message })

    }

}