

export type Users = {
    name: string
    CPF: string
    birthDate: string
    balance: number
    extract: Transactions[]  

}

export type Transactions ={
    value: number
    date: string
    description: string
}