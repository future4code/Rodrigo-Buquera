import { Users, Transactions } from "./types"

export const users: Users[] = [
    {
    name: "rodrigo",
    CPF: "111.111.111-23",
    birthDate: "20/05/1989",
    balance: -500,
    extract: [
        {
            value: -1000 , 
            date: "16/07/2021",
            description: "gastos para viver "
        },
        {
            value: 500 , 
            date: "15/07/2021",
            description: "pagode entrando na conta"
        },
    ]
    },
    {
        name: "louize",
        CPF: "123.111.111-23",
        birthDate: "20/05/1990",
        balance: 300,
        extract: [
                     {
                value: 300 , 
                date: "15/07/2021",
                description: "herança"
            },
        ]
        },

]