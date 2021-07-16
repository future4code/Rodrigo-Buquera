import { Request, Response } from "express";
import { Transactions, Users } from "../types";
import { users } from "../users";

export const payBills = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400
    const { name, CPF, value, date, description } = req.query

    try {

        if (!name || !CPF) {
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

        if (!value || !description) {
            errorCode = 422
            throw new Error("verifique as informações do pagamento ")
        }

        const payment: number = Number(value)
        let today: any | undefined = date as string

        if (!today) {
            today = new Date()
        } else {
            const verifyToday = new Date()
            const fixDate: number[] = today.split("/")
            const verifyDate: any = new Date(fixDate[2], fixDate[1], fixDate[0]).getTime()

            if (verifyDate < verifyToday) {
                errorCode = 425
                throw new Error("ainda não inventaram a máquina do tempo")
            }
        }

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


            const newOperation: Transactions = {
                value: -payment,
                date: `${today}`,
                description: "deposito"
            }
            account.extract.push(newOperation)

            res.status(200).send(`pagamento feito! Seu saldo é ${account.balance}`)

        } else {
            errorCode = 403
            throw new Error(" entre com um valor válido de depósito")
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })

    }

}