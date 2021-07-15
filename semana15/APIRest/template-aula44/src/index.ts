import express, { Request, Response } from 'express'
import cors from 'cors'
import { patchMessage } from './updateUser'


type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
export let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// ex.1 

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400

  try {
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }

})


// ex.2

// app.get("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400
//   const selectedType: string = req.query.type as string

//   try {
//     // console.log("teste1",selectedType)
//     if (selectedType !== "ADMIN" && selectedType !== "NORMAL") {
//       errorCode = 404
//       throw new Error("entre com um ADMIN ou NORMAL")

//     }

//     if (selectedType === "ADMIN" || selectedType === "NORMAL") {
//       const newList: User[] | undefined = users.filter((user) => user.type === selectedType)
//       res.status(200).send(newList)
//     }

//     res.end()

//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })

//   }
// })

//ex3. 
// fiz por pathparams mesmo sabendo que não é o ideal
// app.get("/users/:name", (req: Request, res: Response) => {
//   let errorCode: number = 400
//   const selectedName: string = req.params.name as string

//   try {

//     // if (!selectedName) {
//     //   errorCode = 404
//     //   throw new Error("entre com um nome")
//     // }

//     const result: User | undefined = users.find((user) => user.name === selectedName)

//     if (!result) {
//       errorCode = 404
//       throw new Error("nenhum usuário encontrado")
//     }

//     res.status(200).send(result)

//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })

//   }
// })

//ex4.

// app.post("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400

//   try {
//     const { id, name, email, type, age } = req.body

//     if (!id || !name || !email || !type || !age) {
//       errorCode = 422
//       throw new Error("verifique os campos da requisição")
//     }

//     const newUser: User = { id, name, email, type, age }

//     users.push(newUser)
//     res.status(201).send({ message: "usuário criado com sucesso" })


//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })
//   }
// })

// ex.5 

app.put("/users/:id", patchMessage("-alterado"))


// ex6 

app.patch("/users/:id", patchMessage("-realterado"))

// sem id
// app.patch("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400


//   try {

//     const newName = req.body.name as string

//     if (!newName) {
//       errorCode = 422
//       throw new Error("verifique o nome na requisição")
//     }

//     users[users.length-1].name  = newName.replace("-alterado", "-realterado")

//     res.status(201).send({ message: "usuário alterado com sucesso" })

//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })
//   }
// })

// ex.7

app.delete("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400
  const selectedID: number = Number(req.params.id)

  try {

    if(isNaN(selectedID)){
      errorCode= 422
      throw new Error("entre com id númerico")
    }

    const index: number | undefined = users.findIndex((user) => user.id === selectedID)
  
      if (index === -1) {
        errorCode = 404
        throw new Error("nenhum usuário encontrado")
      }

    const newList: User[] = users.filter(user => user.id !== selectedID)

    res.status(200).send("usuário deletado com sucesso")

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }

}
)