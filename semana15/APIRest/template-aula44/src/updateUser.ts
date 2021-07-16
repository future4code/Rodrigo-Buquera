import express, { Request, Response } from 'express'
import { users } from './index'

export const patchMessage = (message : string) => (req: Request, res: Response) => {
    let errorCode: number = 400
    const selectedID: number = Number(req.params.id)
      
    try {
      
      const newName = req.body.name as string
      const index: number | undefined = users.findIndex((user) => user.id === selectedID)
  
      if (index === -1) {
        errorCode = 404
        throw new Error("nenhum usuário encontrado")
      }
  
      if (!newName) {
        errorCode = 422
        throw new Error("verifique o nome na requisição")
      }
  
      users[index].name  = newName.concat(message)
      
      res.status(201).send({ message: "usuário alterado com sucesso" })
  
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message })
    }
  } 

