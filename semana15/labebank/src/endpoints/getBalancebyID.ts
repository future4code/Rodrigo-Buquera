import { Request, Response } from "express";
import { Users } from "../types";
import { users } from "../users";

export const getBalanceByCPF = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400
     
    try {
        const CPF: string = req.params.cpf

        if (!CPF) {
            errorCode = 400
            throw new Error("entre com um valor de CPF")
        }

        const account: Users | undefined = users.find(user => user.CPF === CPF)

        if (!account) {
            errorCode = 404
            throw new Error("usuário não encontrado")
        }
            
        res.status(201).send({ message: `o saldo é ${account.balance}`})

    } catch (error) {
        res.status(errorCode).send({ message: error.message })

    }
}