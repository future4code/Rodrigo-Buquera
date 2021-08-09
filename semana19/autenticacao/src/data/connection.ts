import knex from 'knex'
import dotenv from 'dotenv'
import { user } from '../types'

dotenv.config()

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    }
})

export default connection

export const postUser = async(id: string, email: string, password: string):Promise<user> => {
    const user = {id, email, password}

        await connection("auth_users")
        .insert(user)

       return user
} 

export const getUserByEmail = async( email: string):Promise<any> => {
    const result =  await connection("auth_users")
        .select("*")
        .where("email", "=", `${email}`)

       return result[0]
       
} 

export const getUserByID = async(id:string): Promise<user> => {

    const result =  await connection("auth_users")
    .select("*")
    .where("id", "=", `${id}`)

    return result[0]
}