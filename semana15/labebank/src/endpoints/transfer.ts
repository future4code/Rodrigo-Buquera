import { Request, Response } from "express";
import { Transactions, Users } from "../types";
import { users } from "../users";

export const transfer = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400
    const { name, CPF, value, destinyName, destinyCPF } = req.query

    try {

        if (!name || !CPF || !destinyName || !destinyCPF) {
            errorCode = 422
            throw new Error("verifique as informações do usuário ")
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

        const destinyAccount: Users | undefined = users.find(user => user.CPF === destinyCPF)
        if (!destinyAccount) {
            errorCode = 404
            throw new Error("destinatário não encontrado ")
        }

        if (destinyAccount.name !== destinyName) {
            errorCode = 404
            throw new Error(" o nome do destinatário não consta no sistema")
        }

        const payment: number = Number(value)
        let today : any = new Date()

        if (!isNaN(payment)) {
            if (payment <= 0) {
                errorCode = 403
                throw new Error("valores negativos não são aceitos")
            }

            if (payment > account.balance) {
                errorCode = 403
                throw new Error("saldo insuficiente")
            }

            account.balance -= payment
            destinyAccount.balance += payment

            const newOperation: Transactions = {
                value: -payment,
                date: `${today}`,
                description: `transferencia para ${ destinyAccount.name }`
            }
            account.extract.push(newOperation)

            const newOperationDestiny: Transactions = {
                value: payment,
                date: `${today}`,
                description: `recebido de ${ account.name }`
            }
            destinyAccount.extract.push(newOperationDestiny)

            res.status(200).send(`tranferencia feita! Seu saldo é ${account.balance} o da outra é ${destinyAccount.balance}  `)

        } else {
            errorCode = 403
            throw new Error(" entre com um valor válido de depósito")
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })

    }

}