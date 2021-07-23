import { Request, Response } from "express";
import { getDate } from "../functions/getDate";
import { Transactions, Users } from "../types";
import { users } from "../users";

export const deposit = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400
    const { name, CPF, balance } = req.query

    try {

        if (!name || !CPF) {
            errorCode = 422
            throw new Error("verifique as informações passadas")
        }

        const account: Users | undefined = users.find(user => user.CPF === CPF)
        if (!account) {
            errorCode = 404
            throw new Error(" usuário não encontrado ")
        }

        if (account.name !== name) {
            errorCode = 404
            throw new Error(" o nome não consta no sistema")
        }

        const deposit: number = Number(balance)

        if (!isNaN(deposit)) {
            if (deposit < 0) {
                errorCode = 403
                throw new Error(" valor negativos não são aceitos")
            }

            account.balance += deposit
            const today: any = new Date 
           
            const newOperation: Transactions = {
                value: deposit,
                date: `${today}`, 
                description: "deposito"
            }
            account.extract.push(newOperation)

            res.status(200).send(`deposito feito! Seu saldo é ${account.balance}`)


        } else {
            errorCode = 403
            throw new Error(" entre com um valor válido de depósito")
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })

    }

}