import { connection } from "../data/connection"

export default async function selectAllUsers(name:string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select("id", "name", "email", "type" )
    .where("name", "LIKE", `%${name}%`)
      
    return result
 }