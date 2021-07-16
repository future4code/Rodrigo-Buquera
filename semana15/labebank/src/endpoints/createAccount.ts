import { Request, Response } from "express";
import { Users } from "../types";
import { users } from "../users";

export const createAccount = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400
    const { name, CPF, birthDate } = req.body

    try {

        if (!name || !CPF || !birthDate) {
            errorCode = 422
            throw new Error("verifique os campos das requisição")
        }

        const verifyCPF: Users | undefined = users.find(user => user.CPF === CPF)

        if (verifyCPF) {
            errorCode = 403
            throw new Error("já existe um usuário com este CPF")
        }

        const today: any = new Date().getTime()
        const fixDate: number[] = birthDate.split("/")
        const verifyDate: any = new Date(fixDate[2], fixDate[1], fixDate[0]).getTime()
        const ageCalculation: number = today - verifyDate
        const age18: number = 31556926*18

      
        if (ageCalculation < age18) {
            errorCode = 403
            throw new Error(" é preciso ter mais de 18 anos")
            // não sei o que deu errado
        }

        const newAccount = {
            name: name,
            CPF: CPF,
            birthDate: birthDate,
            balance: 0,
            extract: []
        }

        users.push(newAccount)
        res.status(201).send({ message: "conta criada com sucesso" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })

    }
}